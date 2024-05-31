import "./global.css";
import "./style.css";
import { saveProjects, loadProjects, hasStorage } from "./readWrite";
import { updateDropdown } from "./modal";

export const projects = [];

const initializeProjectsWithDefault = function () {
  console.log("No save found, create default project.");
  const defaultProject = createProject("default");
  projects.push(defaultProject);
};

export const findProject = (projName) => {
  return projects.find((project) => project.projectName === projName);
};

const createProject = function (projectName) {
  const todos = [];
  return {
    projectName,
    todos,
  };
};

const buttonCreateProject = document.querySelector(".button-create-project");
buttonCreateProject.addEventListener("click", () => {
  const projectNameInput = document.querySelector("input");
  const newProjectName = projectNameInput.value;
  const newProjectObject = createProject(newProjectName);
  projects.push(newProjectObject);
  saveProjects(projects);
  refreshUI();
  projectNameInput.value = "";
});

const populateTodos = function () {};

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
loadProjects(projects);
if (projects.length === 0) initializeProjectsWithDefault();
refreshUI();
