const helperButton = document.querySelector(".helper__button");
const helperImgOpen = document.querySelector(".helper__img-open");
const helperImgClose = document.querySelector(".helper__img-close");
const helperBody = document.querySelector(".helper__body");

helperButton.addEventListener("click", () => {
  helperImgOpen.classList.toggle("active");
  helperImgClose.classList.toggle("active");
  helperBody.classList.toggle("active");

  if (helperImgClose.classList.contains("active")) {
    helperButton.style.animation = "none";
  } else {
    helperButton.style.animation = "animate_pulse 2s infinite";
  }
});
