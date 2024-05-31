import { projects } from "./index.js";

const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");

openModal.addEventListener("click", () => {
  const popupModal = document.querySelector(".popup-modal");
  const backdrop = document.querySelector(".backdrop");
  popupModal.classList.add("show");
  backdrop.classList.add("show");
});

closeModal.addEventListener("click", () => {
  const popupModal = document.querySelector(".popup-modal");
  const backdrop = document.querySelector(".backdrop");
  popupModal.classList.remove("show");
  backdrop.classList.remove("show");
});

const selectProject = document.getElementById("select-project");
projects.forEach((project) => {
  const option = document.createElement("option");
  option.value = project.projectName;
  option.textContent = project.projectName;
  selectProject.appendChild(option);
});

const addTask = document.querySelector(".add-task");
addTask.addEventListener("click", () => console.log("here"));
