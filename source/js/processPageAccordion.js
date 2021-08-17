"use strict";

let accordionBtn = document.querySelectorAll(".accordion-list__item");

accordionBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("accordion-list__item-active");
  });
});
