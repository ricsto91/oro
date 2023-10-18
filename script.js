const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
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
