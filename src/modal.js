import { localData, publisher, broker } from "./index";
import { saveLocalData, localLocalData, printLocalStorage } from "./readWrite";
import {
  getDropdownSelection,
  createProject,
  findProject,
  findTodo,
  createOrUpdateTodo,
} from "./utilities";
import { format } from "date-fns";

const resetForm = function () {
  document.querySelector(".modal__title").textContent = "New Todo";
  document.querySelector(".form__todo-title-input").value = "";
  document.querySelector(".form__todo-description-input").value = "";
  document.querySelector(".form__date-input").value = "";
  document.querySelector(".form__create-project-input").value = "";
  document.querySelector(".form__priority-select").selectedIndex = 1;

  const hiddenInput = document.querySelector(".form__hidden-input");
  hiddenInput.dataset.action = "create";
  hiddenInput.dataset.projectId = "";
  hiddenInput.dataset.todoId = "";

  const inputRequired = document.querySelector(".form__create-project-input");
  inputRequired.required = false;

  // Reset dropdown/create new
  const dropdown = document.querySelector(".form__projects-select");

  const projIndex = 0;

  dropdown.selectedIndex = projIndex;
  document.querySelector(".form__create-project-container").style.display =
    "none";
  dropdown.disabled = false;
};

export const openModal = function (todoId) {
  // Select corresponding project if user has chosen to view by project
  if (localData.config.lastViewConstraint === "project") {
    const projName = localData.config.lastViewValue;
    const project = findProject("name", projName);
    const projIndex = localData.projects.findIndex(
      (proj) => proj.id === project.id,
    );
    const dropdownProjects = document.querySelector(".form__projects-select");
    dropdownProjects.selectedIndex = projIndex;
  }

  const modal = document.querySelector(".modal");
  const backdrop = document.querySelector(".backdrop");
  modal.classList.add("show");
  backdrop.classList.add("show");

  if (todoId) {
    editExistingTodo(todoId);
  }
};

const buttonCloseModal = document.querySelector(".button-close-modal");
export const closeModal = function () {
  const inputTodoTitle = document.querySelector(".form__todo-title-input");
  if (inputTodoTitle.value === "") return;

  const modal = document.querySelector(".modal");
  const backdrop = document.querySelector(".backdrop");
  modal.classList.remove("show");
  backdrop.classList.remove("show");

  setTimeout(resetForm, 300);
};
buttonCloseModal.addEventListener("click", closeModal);

export const updateDropdown = function () {
  const dropdown = document.querySelector(".form__projects-select");
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
    ".form__create-project-container",
  );
  const inputRequired = document.querySelector(".form__create-project-input");

  if (selection.dataset.action === "create-project") {
    createProjectContainer.style.display = "initial";
    inputRequired.required = true;
  } else {
    createProjectContainer.style.display = "none";
    inputRequired.required = false;
  }
};

const dropdown = document.querySelector(".form__projects-select");
dropdown.addEventListener("click", displayCreateProjectField);

const isInputValid = function (inputElem) {
  const condition1 = inputElem.required && inputElem.value !== "";
  const condition2 = inputElem.required === false;

  return condition1 || condition2 ? true : false;
};

export const saveTodo = function () {
  const projectsDropdown = document.querySelector(".form__projects-select");
  const selectedProject = getDropdownSelection(projectsDropdown);
  const todoTitle = document.querySelector(".form__todo-title-input").value;
  const todoDescription = document.querySelector(
    ".form__todo-description-input",
  ).value;
  const dueDate = document.querySelector(".form__date-input").value;

  const priorityDropdown = document.querySelector(".form__priority-select");
  const selectedPriority = getDropdownSelection(priorityDropdown);

  const dataAction = document.querySelector(".form__hidden-input").dataset
    .action;
  const dataProjectId = document.querySelector(".form__hidden-input").dataset
    .projectId;
  const dataTodoId = document.querySelector(".form__hidden-input").dataset
    .todoId;
  const createProjectInput = document.querySelector(
    ".form__create-project-input",
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

const editExistingTodo = function (todoId) {
  const todo = findTodo("id", todoId);
  const project = findProject("id", todo.get("projectId"));
  const modalTitle = document.querySelector(".modal__title");
  modalTitle.textContent = "Edit Todo";
  const inputTitle = document.querySelector(".form__todo-title-input");
  inputTitle.value = todo.get("title");
  const inputDescription = document.querySelector(
    ".form__todo-description-input",
  );
  inputDescription.value = todo.get("description");
  const dropdownProjects = document.querySelector(".form__projects-select");
  const projIndex = localData.projects.findIndex(
    (proj) => proj.id === project.id,
  );
  dropdownProjects.selectedIndex = projIndex;
  dropdownProjects.disabled = true;

  const dropdownPriority = document.querySelector(".form__priority-select");
  const priority = todo.get("priority");
  dropdownPriority.selectedIndex =
    priority === "high" ? 0 : priority === "medium" ? 1 : 2;

  const dateInput = document.querySelector(".form__date-input");
  const todoDueDate = todo.get("dueDate");
  if (todoDueDate) {
    dateInput.value = format(todoDueDate, "yyyy-MM-dd");
    // dueDate = format(targetTodo.get("dueDate"), "MM-dd-yyyy");
    // dateInput.value = formatDateYmd(todoDueDate);
  }

  const hiddenInput = document.querySelector(".form__hidden-input");
  hiddenInput.dataset.action = "update";
  hiddenInput.dataset.projectId = project.id;
  hiddenInput.dataset.todoId = todo.get("id");
};
