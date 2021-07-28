"use strict";

let burger = document.querySelector(".burger");
let nav = document.querySelector(".header__nav");
let close = document.querySelector(".close");
let body = document.querySelector("body");
let animateNavItem = document.querySelectorAll(".animate__nav-item");

//Скорость анимации для всех элементов на странице
document.documentElement.style.setProperty("--animate-duration", ".6s");

burger.addEventListener("click", () => {
  nav.classList.toggle("header__nav-active");
  body.classList.toggle("active");

  animateNavItem.forEach((elem) => {
    elem.classList.toggle("animate__zoomIn");
  });
});

close.addEventListener("click", () => {
  nav.classList.toggle("header__nav-active");
  body.classList.toggle("active");

  animateNavItem.forEach((elem) => {
    elem.classList.toggle("animate__zoomIn");
  });
});

// window.onscroll = function () {
//   console.log(Math.floor(pageYOffset));
// };
