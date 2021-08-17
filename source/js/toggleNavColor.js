"use strict";

let lineOne = document.querySelector(".burger__line1");
let lineTwo = document.querySelector(".burger__line2");
let langText = document.querySelector(".logo__lang-list li");
let langLink = document.querySelector(".logo__lang-list a");
let headerLogo = document.querySelector(".header__logo");
let tArrow = document.querySelector(".translator-arrow");

lineOne.style.backgroundImage = "url(./img/burger-line-w.svg)";
lineTwo.style.backgroundImage = "url(./img/burger-line-w.svg)";
headerLogo.src = "./img/logo-w.svg";
langText.style.color = "#FFFFFF";
tArrow.src = "./img/translator-arrow-w.svg";

let clientHeight = document.documentElement.clientHeight;

window.onscroll = () => {
  if (window.pageYOffset >= clientHeight) {
    lineOne.style.backgroundImage = "url(./img/burger-line.svg)";
    lineTwo.style.backgroundImage = "url(./img/burger-line.svg)";
    langText.style.color = "#212121";
    langLink.style.color = "#212121";
    headerLogo.src = "./img/logo.svg";
    tArrow.src = "./img/translator-arrow.svg";
  } else if (window.pageYOffset <= clientHeight) {
    lineOne.style.backgroundImage = "url(./img/burger-line-w.svg)";
    lineTwo.style.backgroundImage = "url(./img/burger-line-w.svg)";
    langText.style.color = "#FFFFFF";
    langLink.style.color = "#FFFFFF";
    headerLogo.src = "./img/logo-w.svg";
    tArrow.src = "./img/translator-arrow-w.svg";
  }
};
