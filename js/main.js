const primaryNav = document.querySelector(".primary-nav");
const primaryNavbar = document.querySelector(".primary-nav .navbar");
const seoondaryNav = document.querySelector(".secondary-nav");
const navLogo = document.querySelector(".navbar .logo");
const content = document.querySelector("#main-content");
const navDrawer = document.querySelector(".nav-drawer");
const openMenuIcon = document.querySelector("#open-menu-icon");
const body = document.body;
const primaryNavbarCollapsibles =
  primaryNavbar.querySelectorAll(".collapsible");
const navDrawerCollapsibles = navDrawer.querySelectorAll(".collapsible");
const onClickCollapsibles = document.querySelectorAll(".collapsible.on-click");
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
  handlePrimaryNavbarCollapsibles();
  handleToggleNavDrawer();
  handleOnClickCollapsibles();
  openMenuIcon.addEventListener("click", function () {
    navDrawer.classList.toggle("open");
    closeNavDrawerCollapsibles();
    handleToggleNavDrawer();
  });
  fadeInItems.forEach((target) => {
    observer.observe(target);
  });
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", (event) => {
    if (window.innerWidth > 1045 && navDrawer.classList.contains("open")) {
      navDrawer.classList.remove("open");
      handleToggleNavDrawer();
    }
  });
}

function handleToggleNavDrawer() {
  handleScroll();
  if (navDrawer.classList.contains("open")) {
    window.removeEventListener("scroll", handleScroll);
    openMenuIcon.classList.add("close");
    setNavbarScrolled(true);
    body.classList.add("noscroll");
    primaryNavbar.classList.remove("drop-shadow");
  } else {
    window.addEventListener("scroll", handleScroll);
    openMenuIcon.classList.remove("close");
    body.classList.remove("noscroll");
  }
}

function handleScroll() {
  if (window.scrollY >= 10) {
    setNavbarScrolled(true);
  } else {
    setNavbarScrolled(false);
  }
}


function handlePrimaryNavbarCollapsibles() {
  primaryNavbarCollapsibles.forEach((collapsible) => {
    const content = collapsible.querySelector(".collapsible-content");
    const menuLabel = collapsible.querySelector(".menu-label");
    collapsible.addEventListener("mouseenter", () => {
      menuLabel.classList.add("stay-hovered");
      content.classList.add("open");
    });

    collapsible.addEventListener("mouseleave", () => {
      content.classList.remove("open");
      menuLabel.classList.remove("stay-hovered");
    });
  });
}

function closeNavDrawerCollapsibles() {
  navDrawerCollapsibles.forEach((collapsible) => {
    const content = collapsible.querySelector(".collapsible-content");
    const menuLabel = collapsible.querySelector(".menu-label");
    content.classList.remove("open");
    collapsible.querySelector(".arrow-down").classList.remove("rotate180");
    menuLabel.classList.remove("stay-hovered");
  });
}
function handleOnClickCollapsibles() {
  onClickCollapsibles.forEach((collapsible) => {
    const content = collapsible.querySelector(".collapsible-content");
    const menuLabel = collapsible.querySelector(".menu-label");
    collapsible.addEventListener("click", () => {
      content.classList.toggle("open");
      collapsible.querySelector(".arrow-down").classList.toggle("rotate180");
      menuLabel.classList.toggle("stay-hovered");
    });
  });
}

function setNavbarScrolled(scrolled) {
  if (scrolled) {
    primaryNav.classList.add("scrolled");
    primaryNavbar.classList.add("color-change");
    primaryNavbar.classList.add("drop-shadow");
    navLogo.classList.add("scrolled");
    openMenuIcon.classList.add("color-change");
  } else {
    primaryNav.classList.remove("scrolled");
    primaryNavbar.classList.remove("color-change");
    primaryNavbar.classList.remove("drop-shadow");
    navLogo.classList.remove("scrolled");
    openMenuIcon.classList.remove("color-change");
  }
}
