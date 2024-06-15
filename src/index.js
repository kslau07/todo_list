import "./global.css";
import "./style.css";
import { saveLocalData, loadLocalData, hasStorage } from "./readWrite";
import { openModal, updateDropdown, saveTodo, closeModal } from "./modal";
import { createProject, findProject, findTodo } from "./utilities";
import { filterTodos } from "./filters";
import {
  populateNavTimeframes,
  populateNavProjects,
  changeView,
  navOpen,
  navClose,
} from "./nav";

import { format, formatDistance } from "date-fns";
import LeftArrow from "./assets/left-arrow.svg";

export const localData = {
  projects: [],
  config: {
    projectCounter: 0,
    todoCounter: 0,
    lastViewConstraint: "timeframe",
    lastViewValue: "all",
  },
};

export const allTodos = function () {
  const todosArray = [];
  localData.projects.forEach((project) => {
    project.todos.forEach((todo) => todosArray.push(todo));
  });
  return todosArray;
};

const populateMainTodos = function () {
  const { lastViewConstraint, lastViewValue } = localData.config;
  const filteredTodos = filterTodos(lastViewConstraint, lastViewValue);
  const todosList = document.querySelector(".main__todos-list");
  todosList.innerHTML = "";

  filteredTodos.forEach((todo) => {
    const todoId = todo.get("id");
    const projectId = todo.get("projectId");
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");

    const todoCheckbox = document.createElement("input");
    todoCheckbox.setAttribute("type", "checkbox");
    todoCheckbox.classList.add("todo-card__checkbox");
    todoCheckbox.id = `todo-card__checkbox--todo-id-${todo.get("id")}`;

    const todoTitle = document.createElement("div");
    todoTitle.classList.add("todo-card__title");
    todoTitle.textContent = todo.get("title");
    todoTitle.dataset.projectId = projectId;
    todoTitle.dataset.todoId = todoId;
    // todoTitle.addEventListener("click", function () {
    // publisher.publish("open modal", this);
    // });

    const buttonExpand = createButtonExpandedSection(todoId);
    buttonExpand.dataset.projectId = projectId;

    const todoBody = createTodoBody(todoId);

    todoCard.appendChild(todoCheckbox);
    todoCard.appendChild(todoTitle);
    // todoCard.appendChild(dueDateDiv);
    todoCard.appendChild(buttonExpand);
    todoCard.appendChild(todoBody);
    todosList.appendChild(todoCard);
  });
};

const createTodoBody = function (todoId) {
  const divTodoBody = document.createElement("div");
  divTodoBody.id = `todo-card__body-container--todo-id-${todoId}`;
  divTodoBody.classList.add("todo-card__body-container");
  const divTodoBodySimple = createTodoBodySimple(todoId);
  const divTodoBodyExpanded = createTodoBodyExpanded(todoId);
  divTodoBody.appendChild(divTodoBodySimple);
  divTodoBody.appendChild(divTodoBodyExpanded);
  return divTodoBody;
};

const createTodoBodySimple = function (todoId) {
  const targetTodo = findTodo("id", todoId);
  const targetProject = findProject("id", targetTodo.get("projectId"));
  const divSimple = document.createElement("div");
  divSimple.id = `todo-card__body-simple--todo-id-${todoId}`;
  divSimple.classList.add("todo-card__body-simple");
  divSimple.textContent = targetProject.name;
  divSimple.classList.add("show");
  return divSimple;
};

const createTodoBodyExpanded = function (todoId) {
  const targetTodo = findTodo("id", todoId);
  const targetProject = findProject("id", targetTodo.get("projectId"));
  const divExpanded = document.createElement("div");
  divExpanded.id = `todo-card__body-expanded--todo-id-${todoId}`;
  divExpanded.classList.add("todo-card__body-expanded");

  // Project
  const divProject = document.createElement("div");
  divProject.textContent = `Project: ${targetProject.name}`;

  // Due Date
  const divDueDate = document.createElement("div");
  let dueDate = "";
  if (targetTodo.get("dueDate")) {
    dueDate = format(targetTodo.get("dueDate"), "MM-dd-yyyy");
  }
  divDueDate.textContent = `Due Date: ${dueDate}`;

  // Description
  const divDescription = document.createElement("div");
  divDescription.textContent = `Description: ${targetTodo.get("description")}`;

  // Priority
  const divPriority = document.createElement("div");
  divPriority.textContent = `Priority: ${targetTodo.get("priority")}`;

  divExpanded.appendChild(divProject);
  divExpanded.appendChild(divDueDate);
  divExpanded.appendChild(divDescription);
  divExpanded.appendChild(divPriority);
  return divExpanded;
};

const toggleExpandedSection = function () {
  const buttonExpand = document.querySelector(
    `#button-expanded-section--todo-id-${this.dataset.todoId}`,
  );
  buttonExpand.classList.toggle("show");

  const divTodoBodySimple = document.querySelector(
    `#todo-card__body-simple--todo-id-${this.dataset.todoId}`,
  );
  divTodoBodySimple.classList.toggle("show");

  const divTodoBodyExpanded = document.querySelector(
    `#todo-card__body-expanded--todo-id-${this.dataset.todoId}`,
  );
  divTodoBodyExpanded.classList.toggle("show");
};

const createButtonExpandedSection = function (todoId) {
  const button = document.createElement("button");
  button.type = "button";
  button.id = `button-expanded-section--todo-id-${todoId}`;
  button.classList.add("button-expanded-section");
  button.dataset.todoId = todoId;
  button.addEventListener("click", toggleExpandedSection);
  const leftArrow = new Image();
  leftArrow.src = LeftArrow;
  leftArrow.alt = "A left arrow that expands this todo";
  button.appendChild(leftArrow);

  return button;
};

export const updateMainViewTitle = function () {
  const { lastViewConstraint, lastViewValue } = localData.config;
  const mainViewType = document.querySelector(".main__view-title-type");
  const mainViewValue = document.querySelector(".main__view-title-value");
  mainViewValue.textContent = lastViewValue;

  if (lastViewConstraint == "timeframe") {
    mainViewType.textContent = "View: ";
    mainViewValue.classList.add("main__view-title-by-timeframe");
    mainViewValue.classList.remove("main__view-title-by-project");
  } else if (lastViewConstraint === "project") {
    mainViewType.textContent = "View by Project: ";
    mainViewValue.classList.add("main__view-title-by-project");
    mainViewValue.classList.remove("main__view-title-by-timeframe");
  }
};

export const refreshUI = function () {
  populateMainTodos();
  updateMainViewTitle();
  updateDropdown();
  populateNavTimeframes();
  populateNavProjects();
};

const initializeNewData = function () {
  createProject("default");
};

const firstLoad = function () {
  if (!hasStorage("localStorage")) alert("Warning: Unable to save locally.");
  loadLocalData(localData);
  if (localData.config.projectCounter === 0) initializeNewData();
};

document.cookie = "colortheme=light";
const cookie = document.cookie;
// console.log(cookie);

// Implement pub-sub pattern
import createBroker from "./Broker";
import createPublisher from "./Publisher";
export const broker = createBroker();
export const publisher = createPublisher(broker);

// Subscribe to events
broker.subscribe("start up", firstLoad);
broker.subscribe("start up", saveLocalData);

broker.subscribe("open modal", openModal);
broker.subscribe("open modal", navClose);

broker.subscribe("nav open", navOpen);
broker.subscribe("nav open", closeModal);

broker.subscribe("save todo", saveTodo);
broker.subscribe("save todo", closeModal);
broker.subscribe("save todo", saveLocalData);

broker.subscribe("change view", changeView); // fix this
broker.subscribe("change view", navClose);
broker.subscribe("change view", saveLocalData);

// Publish events
document
  .querySelector(".button-save-todo")
  .addEventListener("click", () => publisher.publish("save todo"));

document
  .querySelector(".button-nav-open")
  .addEventListener("click", () => publisher.publish("nav open"));

document
  .querySelector(".button-new-todo")
  .addEventListener("click", function () {
    publisher.publish("open modal", this);
  });
// Publish event for first load
publisher.publish("start up");
