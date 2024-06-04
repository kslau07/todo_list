import "./global.css";
import "./style.css";
import { saveProjects, loadProjects, hasStorage } from "./readWrite";
import { openModal, updateDropdown } from "./modal";
import { createProject } from "./utilities";

export const projects = [];

const initializeProjectsWithDefault = function () {
  createProject("default");
  refreshUI();
};

const populateTodos = function (project, liElement) {
  project.todos.forEach((todo) => {
    const todoTitle = todo.get("title");
    const div = document.createElement("div");
    div.dataset.projectId = todo.get("projectId");
    div.dataset.todoId = todo.get("id");
    div.textContent = todoTitle;
    div.addEventListener("click", openModal);
    liElement.appendChild(div);
  });
};

const populateProjects = function () {
  const projectsUl = document.querySelector(".projects");
  projectsUl.innerHTML = "";

  projects.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.name;
    projectsUl.appendChild(li);

    populateTodos(project, li);
  });
};

export const refreshUI = function () {
  populateProjects();
  updateDropdown();
};

if (!hasStorage("localStorage")) alert("Warning: Unable to save locally.");
loadProjects(projects);
if (projects.length === 0) initializeProjectsWithDefault();
