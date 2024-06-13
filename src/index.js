import "./global.css";
import "./style.css";
import { saveLocalData, loadLocalData, hasStorage } from "./readWrite";
import { openModal, updateDropdown, saveTodo, closeModal } from "./modal";
import { createProject, formatDateYmd, findProject } from "./utilities";
import { filterTodos } from "./filters";
import {
  populateNavTimeframes,
  populateNavProjects,
  changeView,
  navOpen,
  navClose,
} from "./nav";

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
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");

    const todoTitle = document.createElement("div");
    todoTitle.classList.add("todo-card__title");
    todoTitle.textContent = todo.get("title");
    todoTitle.dataset.projectId = todo.get("projectId");
    todoTitle.dataset.todoId = todo.get("id");
    todoTitle.addEventListener("click", function () {
      publisher.publish("open modal", this);
    });

    const todoProjectName = document.createElement("div");
    const projName = findProject("id", todo.get("projectId")).name;
    todoProjectName.classList.add("todo-card__project-name");
    todoProjectName.textContent = projName;

    // const dueDateDiv = document.createElement("div");
    // dueDateDiv.classList.add("todo-card__due-date");

    // const dueDate = todo.get("dueDate");
    // if (dueDate) {
    //   dueDateDiv.textContent = formatDateYmd(dueDate);
    // }

    todoCard.appendChild(todoTitle);
    // todoCard.appendChild(dueDateDiv);
    todoCard.appendChild(todoProjectName);
    todosList.appendChild(todoCard);
  });
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
  .querySelector(".button-open-modal")
  .addEventListener("click", function () {
    publisher.publish("open modal", this);
  });
// Publish event for first load
publisher.publish("start up");
