import { projects, findProject } from "./index.js";
import { saveProjects, loadProjects } from "./readWrite";

const buttonOpenModal = document.querySelector(".button-open-modal");
const buttonCloseModal = document.querySelector(".button-close-modal");

buttonOpenModal.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  const backdrop = document.querySelector(".backdrop");
  modal.classList.add("show");
  backdrop.classList.add("show");
});

const closeModal = function () {
  const modal = document.querySelector(".modal");
  const backdrop = document.querySelector(".backdrop");
  modal.classList.remove("show");
  backdrop.classList.remove("show");
};

buttonCloseModal.addEventListener("click", closeModal);

export const updateDropdown = function () {
  const dropdown = document.getElementById("modal__projects-select");
  dropdown.innerHTML = "";
  projects.forEach((project) => {
    const option = document.createElement("option");
    option.value = project.projectName;
    option.textContent = project.projectName;
    dropdown.appendChild(option);
  });
};

const buttonAddtodo = document.querySelector(".button-add-todo");
buttonAddtodo.addEventListener("click", () => {
  const projectsDropdown = document.getElementById("modal__projects-select");
  const selectedProjectName =
    projectsDropdown.options[projectsDropdown.selectedIndex].value;
  const todoInput = document.getElementById("modal__todo-input");
  const selectedProject = findProject(selectedProjectName);
  const newTodo = new Map();

  newTodo.set("project", selectedProjectName);
  newTodo.set("todo", todoInput.value);
  selectedProject.todos.push(newTodo);
  todoInput.value = "";
  closeModal();
  saveProjects(projects);
});

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
