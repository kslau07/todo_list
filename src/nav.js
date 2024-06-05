import Checkmark from "./assets/checkmark.svg";
const logo = document.querySelector(".logo");
const checkmark = new Image();
checkmark.src = Checkmark;
checkmark.classList.add("logo-image");
logo.insertBefore(checkmark, logo.childNodes[1]);

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const toggle = function () {
  nav.classList.toggle("show");
};
navToggle.addEventListener("click", toggle);
const navCloseButton = document.querySelector(".nav__close-button");
navCloseButton.addEventListener("click", toggle);
