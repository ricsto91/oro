var lastScrollPosition = 0;

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  lastScrollPosition = currentScrollPosition;
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const fullScreenMenu = document.querySelector(".full-screen-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  fullScreenMenu.style.display = navMenu.classList.contains("active")
    ? "block"
    : "none";
});

const menuLinks = document.querySelectorAll(".nav-menu a");

function closeMenu() {
  const menu = document.querySelector(".nav-menu");
  menu.classList.remove("active");
}

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const hamburgerIcon = document.querySelector(".hamburger");

function closeMenuAndResetHamburger() {
  const menu = document.querySelector(".nav-menu");
  menu.classList.remove("active");
  hamburgerIcon.classList.remove("active");
}

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenuAndResetHamburger);
});
