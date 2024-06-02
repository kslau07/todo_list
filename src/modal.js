import {
  projects,
  createProject,
  findProjectById,
  findTodoById,
  createTodo,
} from "./index.js";
import { saveProjects, loadProjects } from "./readWrite";
import { getDropdownSelection } from "./utilities";

const buttonOpenModal = document.querySelector(".button-open-modal");

const editExistingTodo = function (projectId, todoId) {
  const project = findProjectById(projectId);
  const todo = findTodoById(projectId, todoId);
  const modalTitle = document.querySelector(".modal__title");
  modalTitle.textContent = "Update Todo";
  const inputTitle = document.querySelector(".modal__todo-input");
  inputTitle.value = todo.get("title");
  const dropdown = document.querySelector(".modal__projects-select");
  const projIndex = projects.findIndex(
    (project) => project.id === Number(projectId),
  );
  dropdown.selectedIndex = projIndex;
  dropdown.disabled = true;

  const dateInput = document.querySelector(".modal__date-input");
  dateInput.value = todo.get("dueDate");

  const buttonSubmit = document.querySelector(".button-submit");
  buttonSubmit.innerText = "Update";

  const hiddenInput = document.querySelector(".modal__hidden-input");
  hiddenInput.dataset.projectId = findProjectById(projectId).id;
  hiddenInput.dataset.todoId = todo.get("id");
};

const editNewTodo = function () {
  const modalTitle = document.querySelector(".modal__title");
  modalTitle.textContent = "Add Todo";
  const input = document.querySelector(".modal__todo-input");
  input.value = "";
  const dropdown = document.querySelector(".modal__projects-select");
  // const projIndex = projects.findIndex(
  //   (project) => project.id === Number(projectId),
  // );
  // dropdown.selectedIndex = projIndex;
  dropdown.disabled = false;
  const hiddenInput = document.querySelector(".modal__hidden-input");
  hiddenInput.value = "";
};

export const openModal = function () {
  const modal = document.querySelector(".modal");
  const backdrop = document.querySelector(".backdrop");
  modal.classList.add("show");
  backdrop.classList.add("show");

  if (this.dataset.projectId) {
    editExistingTodo(this.dataset.projectId, this.dataset.todoId);
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
    option.dataset.projectId = project.id;
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
    const projectId = option.dataset.projectId;
    return findProjectById(projectId);
  }
};

const resetForm = function () {
  document.querySelector(".modal__todo-input").value = "";
  document.querySelector(".modal__date-input").value = "";
  document.querySelector(".modal__create-project-input").value = "";

  // Reset dropdown/create new
  const dropdown = document.querySelector(".modal__projects-select");
  const projIndex = projects.findIndex((project) => project.id > 0);
  dropdown.selectedIndex = projIndex;
  document.querySelector(".modal__create-project-label").style.display = "none";
};

const buttonAddtodo = document.querySelector(".button-submit");
const addTodo = function () {
  const projectsDropdown = document.querySelector(".modal__projects-select");
  const selectedOption = getDropdownSelection(projectsDropdown);
  const targetProject = findOrCreateProject(selectedOption);
  const todoTitle = document.querySelector(".modal__todo-input");
  const dueDate = document.querySelector(".modal__date-input").value;

  const newTodo = createTodo(todoTitle.value, targetProject.id, dueDate);
  targetProject.todos.push(newTodo);
  resetForm();
  closeModal();
  saveProjects(projects);
};
buttonAddtodo.addEventListener("click", addTodo);

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
