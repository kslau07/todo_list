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

export const createProject = function (projectName) {
  const newProject = { projectName, todos: [] };
  return newProject;
};

export const findProject = (projName) => {
  return projects.find((project) => project.projectName === projName);
};

export const createTodo = function (title, projectName) {
  const newTodo = new Map();
  newTodo.set("title", title);
  newTodo.set("project", projectName);

  return newTodo;
};

/*delete me*/
// const buttonCreateProject = document.querySelector(".button-create-project");
// buttonCreateProject.addEventListener("click", () => {
//   const projectNameInput = document.querySelector("input");
//   const newProjectName = projectNameInput.value;
//   const newProjectObject = createProject(newProjectName);
//   projects.push(newProjectObject);
//   saveProjects(projects);
//   refreshUI();
//   projectNameInput.value = "";
// });

const populateTodos = function (project, liElement) {
  project.todos.forEach((todo) => {
    const todoTitle = todo.get("title");
    const div = document.createElement("div");
    div.textContent = todoTitle;
    liElement.appendChild(div);
  });
};

const populateProjects = function () {
  const projectsUl = document.querySelector(".projects");
  projectsUl.innerHTML = "";

  projects.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.projectName;
    projectsUl.appendChild(li);

    populateTodos(project, li);
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
