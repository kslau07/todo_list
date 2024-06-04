const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
navToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

import Checkmark from "./assets/checkmark.svg";
const logo = document.querySelector(".logo");
const checkmark = new Image();
checkmark.src = Checkmark;
checkmark.classList.add("logo-image");
logo.insertBefore(checkmark, logo.childNodes[1]);
