const bg = document.getElementById("video");
const text = document.getElementById("text");
window.addEventListener("scroll", function () {
  text.style.fontSize = 100 + +window.pageYOffset + "0.5%";
  bg.style.backgroundSize = 160 - +window.pageYOffset / 12 + "%";
  bg.style.opacity = 0.1 + +window.pageYOffset + "";
});
