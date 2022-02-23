

const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".nav");
const triangle = document.querySelector(".triangle");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  triangle.classList.toggle("triangle--visible");
});