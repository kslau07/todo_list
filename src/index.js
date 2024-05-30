import "./style.css";
import { storageAvailable } from "./storageAvailable";

const projects = [];

const hasStorage = (type) => (storageAvailable(type) ? true : false);

const saveProjects = function () {
  if (!hasStorage("localStorage")) return;

  localStorage.setItem("projects", JSON.stringify(projects));
};

const createProject = function (projectName) {
  return {
    projectName,
  };
};

const initializeProjectsWithDefault = function () {
  const defaultProject = createProject("default");
  projects.push(defaultProject);
};

const loadProjects = function () {
  if (localStorage.getItem("projects")) {
    const savedProjects = JSON.parse(localStorage.getItem("projects"));
    savedProjects.forEach((savedProject) => projects.push(savedProject));
  } else {
    initializeProjectsWithDefault();
  }
};

const buttonCreateProject = document.querySelector(".button-create-project");
buttonCreateProject.addEventListener("click", () => {
  const projectNameInput = document.querySelector("input");
  const newProjectName = projectNameInput.value;
  const newProjectObject = createProject(newProjectName);
  projects.push(newProjectObject);
  saveProjects();
  refreshUI();
  projectNameInput.value = "";
});

const populateProjects = function () {
  const projectsUl = document.querySelector(".projects");
  projectsUl.innerHTML = "";

  projects.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.projectName;
    projectsUl.appendChild(li);
  });
};

function refreshUI() {
  populateProjects();
}

if (!hasStorage("localStorage")) alert("Warning: Unable to save locally.");
loadProjects();
refreshUI();

/*extract to own file*/

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