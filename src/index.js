import "./global.css";
import "./style.css";
import { storageAvailable } from "./storageAvailable";
import { updateDropdown } from "./modal";

export const projects = [];

export const findProject = (projName) => {
  return projects.find((project) => project.projectName === projName);
};

const hasStorage = (type) => (storageAvailable(type) ? true : false);

const saveProjects = function () {
  if (!hasStorage("localStorage")) return;

  localStorage.setItem("projects", JSON.stringify(projects));
};

const createProject = function (projectName) {
  const todos = [];
  return {
    projectName,
    todos,
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
  updateDropdown();
}

if (!hasStorage("localStorage")) alert("Warning: Unable to save locally.");
loadProjects();
refreshUI();
