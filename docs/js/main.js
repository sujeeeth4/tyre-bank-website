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
