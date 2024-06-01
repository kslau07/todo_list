import { projects, createProject, findProject, createTodo } from "./index.js";
import { saveProjects, loadProjects } from "./readWrite";
import { getDropdownSelection } from "./utilities";

const buttonOpenModal = document.querySelector(".button-open-modal");
buttonOpenModal.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  const backdrop = document.querySelector(".backdrop");
  modal.classList.add("show");
  backdrop.classList.add("show");
});

const buttonCloseModal = document.querySelector(".button-close-modal");
const closeModal = function () {
  const modal = document.querySelector(".modal");
  const backdrop = document.querySelector(".backdrop");
  modal.classList.remove("show");
  backdrop.classList.remove("show");
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
    return findProject(projectName);
  }
};

const buttonAddtodo = document.querySelector(".button-add-todo");
buttonAddtodo.addEventListener("click", () => {
  const projectsDropdown = document.querySelector(".modal__projects-select");
  const selectedOption = getDropdownSelection(projectsDropdown);
  const targetProject = findOrCreateProject(selectedOption);

  const todoTitle = document.querySelector(".modal__todo-input");
  const projectName = targetProject.value;
  const newTodo = createTodo(todoTitle.value, projectName);
  targetProject.todos.push(newTodo);
  todoTitle.value = "";
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
