const menuButton = document.querySelector(".menu-toggle");
const mobileNavigation = document.querySelector("#mobile-navigation");

function setMenuOpen(open) {
  mobileNavigation.hidden = !open;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menuButton.querySelectorAll(".line").forEach((line) => {
    line.classList.toggle("open", open);
  });
}

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileNavigation.hidden) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

window.matchMedia("(min-width: 951px)").addEventListener("change", (event) => {
  if (event.matches) setMenuOpen(false);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

// Keep all catalogue items in the HTML so they remain available without JavaScript.
const filters = document.querySelector("[data-catalog-controls]");
const productCards = [...document.querySelectorAll(".product-card")];
const catalogStatus = document.querySelector("#catalog-status");

const vehicleOverview = document.querySelector("#vehicle-overview");
const catalogDetails = document.querySelector("#catalog-details");
const catalogTitle = document.querySelector("#catalog-title");
const backToVehicles = document.querySelector(".catalog-back");
const tyresSection = document.querySelector("#tyres");
let selectedVehicleLink = null;

filters.hidden = false;
backToVehicles.hidden = false;
catalogDetails.hidden = true;

function filterProducts(category) {
  const activeFilter = filters.querySelector(`[data-filter="${category}"]`);
  if (!activeFilter) return;
  filters.querySelectorAll("button").forEach((filter) => {
    filter.setAttribute("aria-pressed", String(filter === activeFilter));
  });
  let visibleCount = 0;
  productCards.forEach((card) => {
    card.hidden = category !== "all" && card.dataset.category !== category;
    if (!card.hidden) visibleCount += 1;
  });
  const categoryName = activeFilter.textContent.trim();
  catalogTitle.textContent = category === "all" ? "All tyre options" : categoryName;
  catalogStatus.textContent = category === "all"
    ? `Showing all ${visibleCount} patterns`
    : `Showing ${visibleCount} patterns · ${categoryName}`;
}

function showVehicles(restoreFocus = false) {
  catalogDetails.hidden = true;
  vehicleOverview.hidden = false;
  tyresSection.setAttribute("aria-labelledby", "tyres-title");
  if (restoreFocus) {
    (selectedVehicleLink || document.querySelector("#tyres-title")).focus({ preventScroll: true });
    tyresSection.scrollIntoView({ block: "start" });
  }
}

vehicleOverview.addEventListener("click", (event) => {
  const link = event.target.closest("[data-category-open]");
  if (!link) return;
  event.preventDefault();
  selectedVehicleLink = link;
  filterProducts(link.dataset.categoryOpen);
  vehicleOverview.hidden = true;
  catalogDetails.hidden = false;
  // This grid may have been marked for a scroll reveal while hidden.
  document.querySelector(".catalog-grid").classList.remove("is-pending");
  tyresSection.setAttribute("aria-labelledby", "catalog-title");
  catalogTitle.focus({ preventScroll: true });
  tyresSection.scrollIntoView({ block: "start" });
});

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (button) filterProducts(button.dataset.filter);
});
backToVehicles.addEventListener("click", () => showVehicles(true));
// Every Tyres navigation link returns to the category overview.
document.querySelectorAll('a[href="#tyres"]').forEach((link) => {
  link.addEventListener("click", () => showVehicles());
});

// Native dialog provides keyboard focus containment and Escape-to-close.
const photoDialog = document.querySelector(".photo-dialog");
const galleryLinks = [...document.querySelectorAll(".gallery-open")];
const fullPhoto = document.querySelector(".photo-full");
const photoCaption = document.querySelector(".photo-caption");
let photoIndex = 0;

function showPhoto(index) {
  photoIndex = (index + galleryLinks.length) % galleryLinks.length;
  const figure = galleryLinks[photoIndex].closest("figure");
  const thumbnail = figure.querySelector("img");
  fullPhoto.src = thumbnail.getAttribute("src");
  fullPhoto.alt = thumbnail.alt;
  photoCaption.textContent = `${photoIndex + 1} / ${galleryLinks.length} — ${figure.querySelector("figcaption").textContent.replace(/^0\d/, "").trim()}`;
}

galleryLinks.forEach((link, index) => {
  link.setAttribute("aria-label", `View full photo: ${link.querySelector("img").alt}`);
  link.addEventListener("click", (event) => {
    if (typeof photoDialog.showModal !== "function") return;
    event.preventDefault();
    showPhoto(index);
    photoDialog.showModal();
  });
});
document.querySelector(".photo-close").addEventListener("click", () => photoDialog.close());
document.querySelector(".photo-prev").addEventListener("click", () => showPhoto(photoIndex - 1));
document.querySelector(".photo-next").addEventListener("click", () => showPhoto(photoIndex + 1));
photoDialog.addEventListener("click", (event) => {
  if (event.target === photoDialog) photoDialog.close();
});
photoDialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    showPhoto(photoIndex + (event.key === "ArrowRight" ? 1 : -1));
  }
});

if ("IntersectionObserver" in window) {
  const header = document.querySelector(".site-header");
  const headerObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle("is-scrolled", !entry.isIntersecting);
  });
  headerObserver.observe(document.querySelector(".topline"));

  const navigationLinks = document.querySelectorAll(".desktop-nav a, .mobile-nav a[href^='#']");
  const navigationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const current = `#${entry.target.id || "home"}`;
      navigationLinks.forEach((link) => {
        if (link.getAttribute("href") === current) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-15% 0px -55% 0px" });
  document.querySelectorAll(".hero, main > section[id]").forEach((section) => navigationObserver.observe(section));

  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!motionPreference.matches) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("is-pending");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: "0px 0px 40px 0px" });
    document.querySelectorAll(".section-intro, .catalog-grid, .services-photo, .service-list, .about-visual, .about-content, .gallery-grid").forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add("reveal", "is-pending");
      revealObserver.observe(element);
    });
    motionPreference.addEventListener("change", (event) => {
      if (!event.matches) return;
      revealObserver.disconnect();
      document.querySelectorAll(".is-pending").forEach((element) => element.classList.remove("is-pending"));
    });
  }
}
