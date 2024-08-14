let prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
let options = {
  threshold: 0,
  rootMargin: "0px 0px 0px 0px",
};
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
    } else {
      return;
    }
  });
};
let observer = new IntersectionObserver(callback, options);
const fadeInItems = Array.from(document.querySelectorAll(".fade-in"));

window.onload = (event) => {
  main();
};

function main() {
  fadeInItems.forEach((target) => {
    observer.observe(target);
  });
}