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
