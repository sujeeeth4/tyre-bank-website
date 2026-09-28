// Mobile navigation ---------------------------------------------------------
const mobileMenuButton = document.querySelector(".menu-toggle");
const mobileNavigation = document.querySelector("#mobile-navigation");
const translate = (source) => window.tyreBankI18n?.translate(source) || source;

function setMobileMenuOpen(open) {
  mobileNavigation.hidden = !open;
  mobileMenuButton.setAttribute("aria-expanded", String(open));
  mobileMenuButton.setAttribute("aria-label", translate(open ? "Close menu" : "Open menu"));
  mobileMenuButton.querySelectorAll(".menu-toggle-line").forEach((line) => {
    line.classList.toggle("open", open);
  });
}

mobileMenuButton.addEventListener("click", () => {
  setMobileMenuOpen(mobileMenuButton.getAttribute("aria-expanded") !== "true");
});

mobileNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMobileMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileNavigation.hidden) {
    setMobileMenuOpen(false);
    mobileMenuButton.focus();
  }
});

window.matchMedia("(min-width: 951px)").addEventListener("change", (event) => {
  if (event.matches) setMobileMenuOpen(false);
});

// Page metadata -------------------------------------------------------------
document.querySelector("#current-year").textContent = new Date().getFullYear();

// Tyre catalogue ------------------------------------------------------------
// Keep every product in the HTML so the catalogue remains available without JS.
const catalogFilters = document.querySelector("[data-catalog-controls]");
const productCards = [...document.querySelectorAll(".product-card")];
const catalogStatus = document.querySelector("#catalog-status");

const vehicleOverview = document.querySelector("#vehicle-overview");
const catalogDetails = document.querySelector("#catalog-details");
const catalogTitle = document.querySelector("#catalog-title");
const backToVehicles = document.querySelector(".catalog-back");
const tyresSection = document.querySelector("#tyres");
let selectedCategoryTrigger = null;

catalogFilters.hidden = false;
backToVehicles.hidden = false;
catalogDetails.hidden = true;

function filterProducts(category) {
  const selectedFilterButton = catalogFilters.querySelector(`[data-filter="${category}"]`);
  if (!selectedFilterButton) return;
  catalogFilters.querySelectorAll("button").forEach((filter) => {
    filter.setAttribute("aria-pressed", String(filter === selectedFilterButton));
  });
  let visibleProductCount = 0;
  productCards.forEach((card) => {
    card.hidden = category !== "all" && card.dataset.category !== category;
    if (!card.hidden) visibleProductCount += 1;
  });
  const selectedCategoryName = selectedFilterButton.textContent.trim();
  catalogTitle.textContent = category === "all" ? translate("All tyre options") : selectedCategoryName;
  catalogStatus.textContent = category === "all"
    ? translate("Showing all patterns").replace("{count}", visibleProductCount)
    : translate("Showing category patterns").replace("{count}", visibleProductCount).replace("{category}", selectedCategoryName);
}

function showVehicles(restoreFocus = false) {
  catalogDetails.hidden = true;
  vehicleOverview.hidden = false;
  tyresSection.setAttribute("aria-labelledby", "tyres-title");
  if (restoreFocus) {
    (selectedCategoryTrigger || document.querySelector("#tyres-title")).focus({ preventScroll: true });
    tyresSection.scrollIntoView({ block: "start" });
  }
}

vehicleOverview.addEventListener("click", (event) => {
  const link = event.target.closest("[data-category-open]");
  if (!link) return;
  event.preventDefault();
  selectedCategoryTrigger = link;
  filterProducts(link.dataset.categoryOpen);
  vehicleOverview.hidden = true;
  catalogDetails.hidden = false;
  // This grid may have been marked for a scroll reveal while hidden.
  document.querySelector(".catalog-grid").classList.remove("is-pending");
  tyresSection.setAttribute("aria-labelledby", "catalog-title");
  catalogTitle.focus({ preventScroll: true });
  tyresSection.scrollIntoView({ block: "start" });
});

catalogFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (button) filterProducts(button.dataset.filter);
});
backToVehicles.addEventListener("click", () => showVehicles(true));
// Every Tyres navigation link returns to the category overview.
document.querySelectorAll('a[href="#tyres"]').forEach((link) => {
  link.addEventListener("click", () => showVehicles());
});

// Gallery viewer ------------------------------------------------------------
// Native dialog provides keyboard focus containment and Escape-to-close.
const photoDialog = document.querySelector(".photo-dialog");
const galleryLinks = [...document.querySelectorAll(".gallery-open")];
const dialogPhoto = document.querySelector(".photo-full");
const dialogCaption = document.querySelector(".photo-caption");
let activePhotoIndex = 0;

function showPhoto(index) {
  activePhotoIndex = (index + galleryLinks.length) % galleryLinks.length;
  const figure = galleryLinks[activePhotoIndex].closest("figure");
  const thumbnail = figure.querySelector("img");
  dialogPhoto.src = thumbnail.getAttribute("src");
  dialogPhoto.alt = thumbnail.alt;
  dialogCaption.textContent = `${activePhotoIndex + 1} / ${galleryLinks.length} — ${figure.querySelector("figcaption").textContent.replace(/^0\d/, "").trim()}`;
}

galleryLinks.forEach((link, index) => {
  link.setAttribute("aria-label", `${translate("View full photo")}: ${link.querySelector("img").alt}`);
  link.addEventListener("click", (event) => {
    if (typeof photoDialog.showModal !== "function") return;
    event.preventDefault();
    showPhoto(index);
    photoDialog.showModal();
  });
});
document.querySelector(".photo-close").addEventListener("click", () => photoDialog.close());
document.querySelector(".photo-prev").addEventListener("click", () => showPhoto(activePhotoIndex - 1));
document.querySelector(".photo-next").addEventListener("click", () => showPhoto(activePhotoIndex + 1));
photoDialog.addEventListener("click", (event) => {
  if (event.target === photoDialog) photoDialog.close();
});
photoDialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    showPhoto(activePhotoIndex + (event.key === "ArrowRight" ? 1 : -1));
  }
});

// Recompute text created by JavaScript after the static page is translated.
document.addEventListener("tyrebank:languagechange", () => {
  const activeCategory = catalogFilters.querySelector('button[aria-pressed="true"]')?.dataset.filter || "all";
  filterProducts(activeCategory);
  mobileMenuButton.setAttribute("aria-label", translate(mobileMenuButton.getAttribute("aria-expanded") === "true" ? "Close menu" : "Open menu"));
  galleryLinks.forEach((link) => {
    link.setAttribute("aria-label", `${translate("View full photo")}: ${link.querySelector("img").alt}`);
  });
  if (photoDialog.open) showPhoto(activePhotoIndex);
});

// Scroll state and optional reveal animations -------------------------------
if ("IntersectionObserver" in window) {
  const header = document.querySelector(".site-header");
  const headerObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle("is-scrolled", !entry.isIntersecting);
  });
  headerObserver.observe(document.querySelector(".announcement-bar"));

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
    document.querySelectorAll(".section-intro, .catalog-grid, .services-photo, .service-card-grid, .about-visual, .about-content, .gallery-grid").forEach((element) => {
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
