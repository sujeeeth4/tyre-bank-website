// Runs immediately after the intro markup, before the rest of the page paints.
// The page remains visible when JavaScript is unavailable.
(() => {
  const loader = document.querySelector("#drive-loader");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reducedMotion.matches) return;

  const startedAt = performance.now();
  let finished = false;
  let departing = false;
  let departureTimer;
  let removalTimer;
  let safetyTimer;

  function removeIntro() {
    if (finished) return;
    finished = true;
    clearTimeout(departureTimer);
    clearTimeout(removalTimer);
    clearTimeout(safetyTimer);
    const restoreFocus = loader.contains(document.activeElement);
    loader.hidden = true;
    document.documentElement.classList.remove("intro-active");
    const content = document.querySelector("#site-content");
    if (content) content.inert = false;
    // Inert content can suppress the browser's initial fragment navigation.
    const section = document.getElementById(location.hash.slice(1));
    if (section && !section.hidden) section.scrollIntoView({ behavior: "instant", block: "start" });
    if (restoreFocus) document.querySelector(".brand")?.focus({ preventScroll: true });
  }

  function driveAway() {
    if (finished || departing) return;
    departing = true;
    loader.classList.add("is-departing");
    loader.querySelector(".loader-status").textContent = "Ready. Let’s roll.";
    removalTimer = setTimeout(removeIntro, 1150);
  }

  function pageReady() {
    if (finished || departing) return;
    clearTimeout(departureTimer);
    // Give the tyre one short spin even when the page loads from cache.
    departureTimer = setTimeout(driveAway, Math.max(0, 1100 - (performance.now() - startedAt)));
  }

  loader.hidden = false;
  document.documentElement.classList.add("intro-active");
  loader.querySelector(".loader-skip").addEventListener("click", removeIntro);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") removeIntro();
  });
  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) removeIntro();
  });
  document.addEventListener("DOMContentLoaded", () => {
    if (!finished) document.querySelector("#site-content").inert = true;
    // Wait for the above-the-fold image, not the map or offscreen gallery.
    const heroImage = document.querySelector(".hero-photo img");
    if (!heroImage || heroImage.complete) pageReady();
    else {
      heroImage.addEventListener("load", pageReady, { once: true });
      heroImage.addEventListener("error", pageReady, { once: true });
    }
  }, { once: true });
  // A slow image must never leave the site behind an indefinite loading screen.
  safetyTimer = setTimeout(driveAway, 3500);
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) removeIntro();
  });
})();
