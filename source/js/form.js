"use strict";

const form = document.querySelector(".form");
const inputName = document.querySelector(".input-name");
const inputMail = document.querySelector(".input-mail");
const inputPhone = document.querySelector(".input-phone");
const formComplite = document.querySelector(".form-complite");
const closeFormComplite = document.querySelector(".form-complite-close");
const fields = document.querySelectorAll(".field");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      fields[i].style.borderBottom = "1px solid red";
    } else {
      formComplite.classList.toggle("form-complite-active");
      body.classList.toggle("active");

      fields[i].value = "";
      fields[i].style.borderBottom = "1px solid #212121";
    }
  }
});

closeFormComplite.addEventListener("click", () => {
  formComplite.classList.toggle("form-complite-active");
  body.classList.toggle("active");
});
