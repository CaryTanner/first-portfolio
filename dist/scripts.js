//nav hamburger menu

let hamburgerBtn = document.querySelector(".menu-button");
let nav = document.querySelector("nav");

hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("hide");
});

let buttonAnimation = document.querySelector("#nav-burger");

buttonAnimation.addEventListener("click", () => {
  buttonAnimation.classList.toggle("open");
});
