// Premium Glow Animation

const buttons = document.querySelectorAll(".buttons a");

buttons.forEach((btn) => {

  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 0 30px gold";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "0 0 12px rgba(255,215,0,.5)";
  });

});

// Profile Animation

const profile = document.querySelector(".profile");

let scale = 1;

setInterval(() => {

  scale = scale === 1 ? 1.03 : 1;

  profile.style.transform = `scale(${scale})`;

}, 1500);

// Fade-in Animation

window.addEventListener("load", () => {

  document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition = "opacity .8s ease";
