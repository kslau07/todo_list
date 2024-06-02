import {
  projects,
  createProject,
  findProjectByName,
  findTodo,
  createTodo,
} from "./index.js";
import { saveProjects, loadProjects } from "./readWrite";
import { getDropdownSelection } from "./utilities";

const buttonOpenModal = document.querySelector(".button-open-modal");

const editExistingTodo = function (projectName, todoTitle) {
  const project = findProjectByName(projectName);
  const todo = findTodo(project, todoTitle);
  const modalTitle = document.querySelector(".modal__title");
  modalTitle.textContent = "Update Todo";
  const inputTitle = document.querySelector(".modal__todo-input");
  inputTitle.value = todo.get("title");
  const dropdown = document.querySelector(".modal__projects-select");
  const projIndex = projects.findIndex(
    (project) => project.projectName === projectName,
  );
  dropdown.selectedIndex = projIndex;
  dropdown.disabled = true;

  const dateInput = document.querySelector(".modal__date-input");
  dateInput.value = todo.get("dueDate");
  console.log(todo.get("dueDate"));

  const hiddenInput = document.querySelector(".modal__hidden-input");
  hiddenInput.value = todo.get("todoId");
};

const editNewTodo = function () {
  const modalTitle = document.querySelector(".modal__title");
  modalTitle.textContent = "Add Todo";
  const input = document.querySelector(".modal__todo-input");
  input.value = "";
  const dropdown = document.querySelector(".modal__projects-select");
  dropdown.disabled = false;
  const hiddenInput = document.querySelector(".modal__hidden-input");
  hiddenInput.value = "";
};

export const openModal = function () {
  const modal = document.querySelector(".modal");
  const backdrop = document.querySelector(".backdrop");
  modal.classList.add("show");
  backdrop.classList.add("show");

  if (this.dataset.project) {
    editExistingTodo(this.dataset.project, this.textContent);
  } else {
    editNewTodo();
  }
};
buttonOpenModal.addEventListener("click", openModal);

const buttonCloseModal = document.querySelector(".button-close-modal");
const closeModal = function () {
  const modal = document.querySelector(".modal");
  const backdrop = document.querySelector(".backdrop");
  modal.classList.remove("show");
  backdrop.classList.remove("show");
  resetForm();
};
buttonCloseModal.addEventListener("click", closeModal);

export const updateDropdown = function () {
  const dropdown = document.querySelector(".modal__projects-select");
  dropdown.innerHTML = "";

  projects.forEach((project) => {
    const option = document.createElement("option");
    option.textContent = project.projectName;
    option.dataset.action = "find-project";
    dropdown.appendChild(option);
  });

  const newProjectOption = document.createElement("option");
  newProjectOption.dataset.action = "create-project";
  newProjectOption.textContent = "Create new...";
  dropdown.appendChild(newProjectOption);
};

const displayCreateProjectField = () => {
  const selection = getDropdownSelection(dropdown);
  const el = document.querySelector(".modal__create-project-label");
  if (selection.dataset.action === "create-project") {
    el.style.display = "initial";
  } else {
    el.style.display = "none";
  }
};

const dropdown = document.querySelector(".modal__projects-select");
dropdown.addEventListener("click", displayCreateProjectField);

// Check if "create-project" was selected
const findOrCreateProject = function (option) {
  const action = option.dataset.action;
  if (action === "create-project") {
    const projectName = document.querySelector(
      ".modal__create-project-input",
    ).value;
    const newProject = createProject(projectName);
    projects.push(newProject);
    return newProject;
  } else if (action === "find-project") {
    const projectName = option.value;
    return findProjectByName(projectName);
  }
};

const resetForm = function () {
  const todoTitle = document.querySelector(".modal__todo-input");
  todoTitle.value = "";
  const dueDate = document.querySelector(".modal__date-input");
  dueDate.value = "";
};

const buttonAddtodo = document.querySelector(".button-add-todo");
const addTodo = function () {
  const projectsDropdown = document.querySelector(".modal__projects-select");
  const selectedOption = getDropdownSelection(projectsDropdown);
  const targetProject = findOrCreateProject(selectedOption);

  const todoTitle = document.querySelector(".modal__todo-input");
  const projectName = targetProject.projectName;
  const dueDate = document.querySelector(".modal__date-input").value;
  const newTodo = createTodo(todoTitle.value, projectName, dueDate);
  targetProject.todos.push(newTodo);
  resetForm();
  closeModal();
  saveProjects(projects);
};
buttonAddtodo.addEventListener("click", addTodo);

// dateInput.addEventListener("click", () => console.log(dateInput.value));

// NOTE: Delete me
document
  .querySelector(".button-log-projects")
  .addEventListener("click", () => console.log(projects));

document
  .querySelector(".button-save-projects")
  .addEventListener("click", saveProjects);

document
  .querySelector(".button-load-projects")
  .addEventListener("click", loadProjects);
