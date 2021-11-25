const sound = document.querySelector(".sound");
const myVideo = document.querySelector(".my__video");

sound.addEventListener("click", () => {
  if (sound.classList.contains("active")) {
    sound.classList.remove("active");
    sound.textContent = "sound off";
    myVideo.muted = true;
  } else {
    sound.classList.add("active");
    sound.textContent = "sound on";
    myVideo.muted = false;
  }
});

