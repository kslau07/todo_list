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
  const id = projects.length + 1;
  const newProject = { id, projectName, todos: [] };
  return newProject;
};

export const findProjectById = (id) => {
  return projects.find((project) => project.id === Number(id));
};

const incrementTodoId = function (project) {
  if (project.todos.length === 0) return 1;

  const lastTodo = project.todos[project.todos.length - 1];
  return lastTodo.get("id") + 1;
};

export const createTodo = function (title, projectId, dueDate) {
  const newTodo = new Map();
  const project = findProjectById(projectId);
  newTodo.set("id", incrementTodoId(project));
  newTodo.set("title", title);
  newTodo.set("projectId", projectId);
  newTodo.set("dueDate", dueDate);
  return newTodo;
};

export const findTodoById = function (projectId, todoId) {
  const project = findProjectById(projectId);
  return project.todos.find((todo) => todo.get("id") === Number(todoId));
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
