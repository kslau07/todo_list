import { localData, updateMainViewTitle, publisher } from "./index";
import { saveLocalData } from "./readWrite";
import Checkmark from "./assets/checkmark.svg";

const logo = document.querySelector(".logo");
const checkmark = new Image();
checkmark.src = Checkmark;
checkmark.classList.add("logo-image");
logo.insertBefore(checkmark, logo.childNodes[1]);

const nav = document.querySelector(".nav");

export const navOpen = function () {
  nav.classList.add("open");
};

export const navClose = function () {
  nav.classList.remove("open");
};

const navCloseButton = document.querySelector(".nav__button-close");
navCloseButton.addEventListener("click", navClose);

export const populateNavTimeframes = function () {
  const timeframes = ["all", "today", "upcoming"];
  const navListPrimary = document.querySelector(".nav__list--primary");
  navListPrimary.innerHTML = "";

  for (const timeframe of timeframes) {
    const listItem = document.createElement("li");
    listItem.classList.add("nav__item");
    const listItemLink = document.createElement("a");
    listItemLink.classList.add("nav__link-timeframe");
    listItemLink.classList.add(`nav__link-timeframe-${timeframe}`);
    listItemLink.href = "#";
    listItemLink.text = [
      timeframe.charAt(0).toUpperCase(),
      timeframe.slice(1),
    ].join(""); // Capitalize word

    listItemLink.addEventListener("click", () =>
      publisher.publish("change view", {
        constraint: "timeframe",
        value: timeframe,
      }),
    );

    listItem.appendChild(listItemLink);
    navListPrimary.appendChild(listItem);
  }
};

export const populateNavProjects = function () {
  const navListSecondary = document.querySelector(".nav__list--secondary");
  navListSecondary.innerHTML = "";
  const { projects } = localData;

  projects.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.classList.add("nav__item");
    const listItemLink = document.createElement("a");
    listItemLink.classList.add("nav__link-project");
    listItemLink.href = "#";
    listItemLink.text = project.name;

    listItemLink.addEventListener("click", () =>
      publisher.publish("change view", {
        constraint: "project",
        value: project.name,
      }),
    );

    listItem.appendChild(listItemLink);
    navListSecondary.appendChild(listItem);
  });
};

const changeViewTimeframe = function () {
  const selectedView = this.textContent;
  const constraint = "timeframe";
  localData.config.lastViewConstraint = constraint;
  localData.config.lastViewValue = selectedView.toLowerCase();
  updateMainViewTitle(constraint, selectedView);
};

const changeViewProject = function () {
  const selectedProjectName = this.textContent;
  const constraint = "project";
  localData.config.lastViewConstraint = constraint;
  localData.config.lastViewValue = selectedProjectName;
  updateMainViewTitle(constraint, selectedProjectName);
};

export const changeView = function ({ constraint, value }) {
  localData.config.lastViewConstraint = constraint;
  localData.config.lastViewValue = value;
};
