import { localData } from "./index";
import { saveLocalData } from "./readWrite";
import Checkmark from "./assets/checkmark.svg";
const logo = document.querySelector(".logo");
const checkmark = new Image();
checkmark.src = Checkmark;
checkmark.classList.add("logo-image");
logo.insertBefore(checkmark, logo.childNodes[1]);

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const toggleShow = function () {
  nav.classList.toggle("show");
};
navToggle.addEventListener("click", toggleShow);
const navCloseButton = document.querySelector(".nav__close-button");
navCloseButton.addEventListener("click", toggleShow);

const navItemAll = document.querySelector(".nav__item--all");
const navItemToday = document.querySelector(".nav__item--today");
const navItemUpcoming = document.querySelector(".nav__item--upcoming");

const changeView = function () {
  const selectedView = this.textContent.toLowerCase();
  localData.config.lastView = selectedView;
  toggleShow();
  saveLocalData();
};

navItemAll.addEventListener("click", changeView);
navItemToday.addEventListener("click", changeView);
navItemUpcoming.addEventListener("click", changeView);
