import { localData, updateMainViewTitle } from "./index";
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

export const populateNavTimeframes = function () {
  const timeframes = ["all", "today", "upcoming"];
  const navListPrimary = document.querySelector(".nav__list--primary");
  navListPrimary.innerHTML = "";

  for (const timeframe of timeframes) {
    const listItem = document.createElement("li");
    listItem.classList.add("nav__item");
    const listItemLink = document.createElement("a");
    listItemLink.classList.add("nav__item--timeframe-link");
    listItemLink.classList.add(`nav__item--timeframe-link--${timeframe}`);
    listItemLink.href = "#";
    listItemLink.text = [
      timeframe.charAt(0).toUpperCase(),
      timeframe.slice(1),
    ].join(""); // Capitalize word
    listItemLink.addEventListener("click", changeViewTimeframe);
    listItem.appendChild(listItemLink);
    navListPrimary.appendChild(listItem);
  }
};

const changeViewTimeframe = function () {
  const selectedView = this.textContent;
  const constraint = "timeframe";
  localData.config.lastViewConstraint = constraint;
  localData.config.lastViewValue = selectedView.toLowerCase();
  updateMainViewTitle(constraint, selectedView);
  toggleShow();
  saveLocalData();
};

const changeViewProject = function () {
  const selectedProjectName = this.textContent;
  const constraint = "project";
  localData.config.lastViewConstraint = constraint;
  localData.config.lastViewValue = selectedProjectName;
  updateMainViewTitle(constraint, selectedProjectName);
  toggleShow();
  saveLocalData();
};

export const populateNavProjects = function () {
  const navListSecondary = document.querySelector(".nav__list--secondary");
  navListSecondary.innerHTML = "";
  const { projects } = localData;

  projects.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.classList.add("nav__item");
    const listItemLink = document.createElement("a");
    listItemLink.classList.add("nav__item--project-link");
    listItemLink.href = "#";
    listItemLink.text = project.name;
    listItemLink.addEventListener("click", changeViewProject);
    listItem.appendChild(listItemLink);
    navListSecondary.appendChild(listItem);
  });
};
