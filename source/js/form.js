"use strict";

const form = document.querySelector(".form-form");
const formComplite = document.querySelector(".form-complite");
const closeFormComplite = document.querySelector(".form-complite-close");
const fields = document.querySelectorAll(".field");
const inputName = document.querySelector(".input-name");
const inputMail = document.querySelector(".input-mail");
const inputPhone = document.querySelector(".input-phone");
const inputMessage = document.querySelector(".input-message");

form.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);
  let formData = new FormData(form);
  if (error === 0) {
    formComplite.classList.toggle("form-complite-active");
    body.classList.toggle("active");
    formReset();
    let response = await fetch("sendmail.php", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      let result = await response.json();
      console.log(result.message);
      form.reset();
    } else {
      console.log("ошибка");
    }
  }
  // else {
  //   console.log("Заполните все поля");
  // }
}

function formValidate(form) {
  let error = 0;

  for (let index = 0; index < inputMail.length; index++) {
    const input = inputMail[index];
    formRemoveError(input);
    if (input.classList.contains("input-mail")) {
      if (emailTest(input)) {
        formAddError(input);
        error++;
      }
    } else {
      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
  }
  return error;
}

function formAddError(input) {
  input.parentElement.classList.add("_error");
  input.classList.add("_error");
}
function formRemoveError(input) {
  input.parentElement.classList.remove("_error");
  input.classList.remove("_error");
}

//test email function
function emailTest(input) {
  return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input.value
  );
}

function formReset() {
  inputName.value = "";
  inputMail.value = "";
  inputPhone.value = "";
  inputMessage.value = "";
}

closeFormComplite.addEventListener("click", () => {
  formComplite.classList.toggle("form-complite-active");
  body.classList.toggle("active");
});

//
function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
  else if (elem.createTextRange) {
    var range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}

function mask(event) {
  var matrix = "+7 (___) ___ ____",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  if (def.length >= val.length) val = def;
  this.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length
      ? val.charAt(i++)
      : i >= val.length
      ? ""
      : a;
  });
  if (event.type == "blur") {
    if (this.value.length == 2) this.value = "";
  } else setCursorPosition(this.value.length, this);
}
var input = document.querySelector(".input-phone");
input.addEventListener("input", mask, false);
input.addEventListener("focus", mask, false);
input.addEventListener("blur", mask, false);
