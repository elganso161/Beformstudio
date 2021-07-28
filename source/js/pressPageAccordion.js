"use strict";

const openBtn = document.querySelector(".open-btn");
const panel = document.querySelector(".press-page__block-panel");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  panel.classList.remove("hiden");
  panel.classList.add("animate__zoomIn");
});

closeBtn.addEventListener("click", () => {
  panel.classList.remove("animate__zoomIn");
  panel.classList.add("hiden");
});

// openBtn.forEach((elem) => {
//   elem.addEventListener("click", () => {
//     panel.forEach((elem) => {
//       elem.classList.toggle("hiden");
//       elem.classList.add("animate__zoomIn");
//     });
//     panel.classList.toggle("hiden");
//     panel.classList.add("animate__zoomIn");
//   });
// });
// closeBtn.forEach((elem) => {
//   elem.addEventListener("click", () => {
//     panel.classList.remove("animate__zoomIn");
//     panel.classList.toggle("hiden");
//   });
// });
