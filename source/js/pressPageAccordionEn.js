"use strict";

const openBtn = document.querySelector(".open-btn-en");
const panel = document.querySelector(".press-page__block-panel");
const closeBtn = document.querySelector(".close-btn-en");

window.onload = openBtn.addEventListener("click", () => {
  panel.classList.remove("hiden");
  panel.classList.add("animate__zoomIn");
});
window.onload = closeBtn.addEventListener("click", () => {
  panel.classList.remove("animate__zoomIn");
  panel.classList.add("hiden");
});

// const openBtn = document.querySelectorAll(".open-btn");
// const panel = document.querySelectorAll(".press-page__block-panel");
// const closeBtn = document.querySelectorAll(".close-btn");

// openBtn.forEach((elem) => {
//   elem.addEventListener("click", () => {
//     panel.forEach((elem) => {
//       elem.classList.remove("hiden");
//       elem.classList.add("animate__zoomIn");
//     });
//   });
// });
// closeBtn.forEach((elem) => {
//   elem.addEventListener("click", () => {
//     panel.classList.remove("animate__zoomIn");
//     panel.classList.remove("hiden");
//   });
// });
