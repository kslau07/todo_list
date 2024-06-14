import { localData, publisher, broker } from "./index";
import { saveLocalData, localLocalData, printLocalStorage } from "./readWrite";
import {
  getDropdownSelection,
  createProject,
  findProject,
  findTodo,
  createOrUpdateTodo,
  formatDateYmd,
} from "./utilities";

const resetForm = function () {
  document.querySelector(".modal__title").textContent = "New Todo";
  document.querySelector(".modal__title-input").value = "";
  document.querySelector(".modal__description-input").value = "";
  document.querySelector(".modal__date-input").value = "";
  document.querySelector(".modal__create-project-input").value = "";
  document.querySelector(".modal__priority-select").selectedIndex = 1;

  const hiddenInput = document.querySelector(".modal__hidden-input");
  hiddenInput.dataset.action = "create";
  hiddenInput.dataset.projectId = "";
  hiddenInput.dataset.todoId = "";

  const inputRequired = document.querySelector(".modal__create-project-input");
  inputRequired.required = false;

  // Reset dropdown/create new
  const dropdown = document.querySelector(".modal__projects-select");

  const projIndex = 0;

  dropdown.selectedIndex = projIndex;
  document.querySelector(".modal__create-project-container").style.display =
    "none";
  dropdown.disabled = false;
};

export const openModal = function (targetElem) {
  const modal = document.querySelector(".modal");
  const backdrop = document.querySelector(".backdrop");
  modal.classList.add("show");
  backdrop.classList.add("show");

  if (targetElem.dataset.projectId) {
    editExistingTodo(targetElem.dataset.projectId, targetElem.dataset.todoId);
  }
};

const buttonCloseModal = document.querySelector(".button-close-modal");
export const closeModal = function () {
  const modal = document.querySelector(".modal");
  const backdrop = document.querySelector(".backdrop");
  modal.classList.remove("show");
  backdrop.classList.remove("show");

  setTimeout(resetForm, 300);
};
buttonCloseModal.addEventListener("click", closeModal);

export const updateDropdown = function () {
  const dropdown = document.querySelector(".modal__projects-select");
  dropdown.innerHTML = "";

  localData.projects.forEach((project) => {
    const option = document.createElement("option");
    option.textContent = project.name;
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
  const createProjectContainer = document.querySelector(
    ".modal__create-project-container",
  );
  const inputRequired = document.querySelector(".modal__create-project-input");

  if (selection.dataset.action === "create-project") {
    createProjectContainer.style.display = "initial";
    inputRequired.required = true;
  } else {
    createProjectContainer.style.display = "none";
    inputRequired.required = false;
  }
};

const dropdown = document.querySelector(".modal__projects-select");
dropdown.addEventListener("click", displayCreateProjectField);

const isInputValid = function (inputElem) {
  const condition1 = inputElem.required && inputElem.value !== "";
  const condition2 = inputElem.required === false;

  return condition1 || condition2 ? true : false;
};

export const saveTodo = function () {
  const projectsDropdown = document.querySelector(".modal__projects-select");
  const selectedProject = getDropdownSelection(projectsDropdown);
  const todoTitle = document.querySelector(".modal__title-input").value;
  const todoDescription = document.querySelector(
    ".modal__description-input",
  ).value;
  const dueDate = document.querySelector(".modal__date-input").value;

  const priorityDropdown = document.querySelector(".modal__priority-select");
  const selectedPriority = getDropdownSelection(priorityDropdown);

  const dataAction = document.querySelector(".modal__hidden-input").dataset
    .action;
  const dataProjectId = document.querySelector(".modal__hidden-input").dataset
    .projectId;
  const dataTodoId = document.querySelector(".modal__hidden-input").dataset
    .todoId;
  const createProjectInput = document.querySelector(
    ".modal__create-project-input",
  );

  if (!todoTitle == "" && isInputValid(createProjectInput)) {
    const targetProject =
      selectedProject.dataset.action === "create-project"
        ? createProject(createProjectInput.value)
        : findProject("id", selectedProject.dataset.projectId);
    const todoDataAttrs = {
      action: dataAction,
      projectId: dataProjectId,
      todoId: dataTodoId,
    };

    const todoFieldData = {
      title: todoTitle,
      description: todoDescription,
      projectId: targetProject.id,
      dueDate: dueDate,
      priority: selectedPriority.value,
    };
    createOrUpdateTodo(todoDataAttrs, todoFieldData);
  }
};

const editExistingTodo = function (projectId, todoId) {
  const project = findProject("id", projectId);
  const todo = findTodo("id", todoId, projectId);
  const modalTitle = document.querySelector(".modal__title");
  modalTitle.textContent = "Update Todo";
  const inputTitle = document.querySelector(".modal__title-input");
  inputTitle.value = todo.get("title");
  const inputDescription = document.querySelector(".modal__description-input");
  inputDescription.value = todo.get("description");
  const dropdownProjects = document.querySelector(".modal__projects-select");
  const projIndex = localData.projects.findIndex(
    (project) => project.id === Number(projectId),
  );
  dropdownProjects.selectedIndex = projIndex;
  dropdownProjects.disabled = true;

  const dropdownPriority = document.querySelector(".modal__priority-select");
  const priority = todo.get("priority");
  dropdownPriority.selectedIndex =
    priority === "high" ? 0 : priority === "medium" ? 1 : 2;

  const dateInput = document.querySelector(".modal__date-input");
  const todoDueDate = todo.get("dueDate");
  if (todoDueDate) {
    dateInput.value = formatDateYmd(todoDueDate);
  }

  const hiddenInput = document.querySelector(".modal__hidden-input");
  hiddenInput.dataset.action = "update";
  hiddenInput.dataset.projectId = findProject("id", projectId).id;
  hiddenInput.dataset.todoId = todo.get("id");
};
