"use strict";

let lineOne = document.querySelector(".burger__line1");
let lineTwo = document.querySelector(".burger__line2");
let langText = document.querySelector(".logo__lang-list li");
let langLink = document.querySelector(".logo__lang-list a");
let headerLogo = document.querySelector(".header__logo");
let tArrow = document.querySelector(".translator-arrow");
let subLogoLangList = document.querySelector(".sub-logo__lang-list a");

let clientHeight = document.documentElement.clientHeight;

window.onload = function () {
  lineOne.style.backgroundImage = "url(./img/burger-line-w.svg)";
  lineTwo.style.backgroundImage = "url(./img/burger-line-w.svg)";
  langText.style.color = "#FFFFFF";
  subLogoLangList.style.color = "#FFFFFF";
  tArrow.src = "./img/translator-arrow-w.svg";
  headerLogo.src = "./img/logo-w.svg";
};

window.onscroll = () => {
  if (window.pageYOffset >= clientHeight) {
    lineOne.style.backgroundImage = "url(./img/burger-line.svg)";
    lineTwo.style.backgroundImage = "url(./img/burger-line.svg)";
    langText.style.color = "#212121";
    langLink.style.color = "#212121";
    tArrow.src = "./img/translator-arrow.svg";
    headerLogo.src = "./img/logo.svg";
  } else if (window.pageYOffset <= clientHeight) {
    lineOne.style.backgroundImage = "url(./img/burger-line-w.svg)";
    lineTwo.style.backgroundImage = "url(./img/burger-line-w.svg)";
    langText.style.color = "#FFFFFF";
    langLink.style.color = "#FFFFFF";
    tArrow.src = "./img/translator-arrow-w.svg";
    headerLogo.src = "./img/logo-w.svg";
  }
};
