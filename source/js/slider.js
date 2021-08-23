"use strict";

const images = document.querySelectorAll(".slider .slider-line img");
const sliderLine = document.querySelector(".slider .slider-line");
let sliderCount = document.querySelector(".slider__count");
let count = 0;
let width;

function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}

init();
window.addEventListener("resize", init);

document.querySelector(".slider-next").addEventListener("click", function () {
  count++;

  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
  sliderCount.innerHTML = "0" + (count + 1);
}

setInterval(() => {
  count++;

  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
}, 5000);

const swiper = new Swiper(".swiper-container", {
  loop: true,
  speed: 700,
  autoplay: {
    delay: 2500,

    disableOnInteraction: false,
  },
});
