import "./global.css";
import "./style.css";
import { saveProjects, loadProjects, hasStorage } from "./readWrite";
import { openModal, updateDropdown } from "./modal";

export const projects = [];

const initializeProjectsWithDefault = function () {
  const defaultProject = createProject("default");
  projects.push(defaultProject);
  refreshUI();
};

export const createProject = function (projectName) {
  const newProject = { projectName, todos: [] };
  return newProject;
};

export const findProjectByName = (projName) => {
  return projects.find((project) => project.projectName === projName);
};

const incrementTodoId = function (project) {
  return project.todos.length + 1;
};

export const createTodo = function (title, projectName, dueDate) {
  const newTodo = new Map();
  const project = findProjectByName(projectName);
  newTodo.set("id", incrementTodoId(project));
  newTodo.set("title", title);
  newTodo.set("project", projectName);
  newTodo.set("dueDate", dueDate);
  return newTodo;
};

export const findTodo = function (project, todoTitle) {
  return project.todos.find((todo) => todo.get("title") === todoTitle);
};

const populateTodos = function (project, liElement) {
  project.todos.forEach((todo) => {
    const todoTitle = todo.get("title");
    const div = document.createElement("div");
    div.dataset.project = todo.get("project");
    div.textContent = todoTitle;
    // div.textContent = todoTitle + " // due date: " + todo.get("dueDate");

    div.addEventListener("click", openModal);

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

export const refreshUI = function () {
  populateProjects();
  updateDropdown();
};

if (!hasStorage("localStorage")) alert("Warning: Unable to save locally.");
loadProjects(projects);
if (projects.length === 0) initializeProjectsWithDefault();

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
