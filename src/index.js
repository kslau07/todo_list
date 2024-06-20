import "./global.css";
import "./style.css";
import { saveLocalData, loadLocalData, hasStorage } from "./readWrite";
import { openModal, updateDropdown, saveTodo, closeModal } from "./modal";
import {
  createProject,
  findProject,
  findTodo,
  deleteTodo,
  sortProjectTodosByDateAsc,
} from "./utilities";
import { filterTodos } from "./filters";
import {
  populateNavTimeframes,
  populateNavProjects,
  changeView,
  navOpen,
  navClose,
} from "./nav";
import { format, formatDistance } from "date-fns";
import All from "./assets/all.svg";
import Calendar from "./assets/calendar.svg";
import Star from "./assets/star.svg";
import Project from "./assets/project.svg";
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

  if (filteredTodos.length === 0) {
    todosList.textContent = "No todos to show.";
  }

  filteredTodos.forEach((todo) => {
    const todoId = todo.get("id");
    const projectId = todo.get("projectId");
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");
    todoCard.id = `todo-card--todo-id-${todo.get("id")}`;

    const todoCheckbox = createTodoCheckbox(todo, todoCard);

    const divTodoTitle = document.createElement("div");
    const spanTodoTitle = document.createElement("span");
    spanTodoTitle.classList.add("todo-card__title");
    spanTodoTitle.textContent = todo.get("title");
    spanTodoTitle.dataset.projectId = projectId;
    spanTodoTitle.dataset.todoId = todoId;
    spanTodoTitle.addEventListener("click", function () {
      toggleExpandedSection.apply(spanTodoTitle);
    });
    divTodoTitle.appendChild(spanTodoTitle);

    if (todo.get("priority") === "high") {
      const spanPriorityHigh = document.createElement("span");
      spanPriorityHigh.classList.add("todo-card__priority-flag");
      spanPriorityHigh.textContent = " ⚑";
      divTodoTitle.appendChild(spanPriorityHigh);
    }

    const buttonExpand = createButtonExpandedSection(todoId);
    buttonExpand.dataset.projectId = projectId;

    const todoBody = createTodoBody(todoId);

    todoCard.appendChild(todoCheckbox);
    todoCard.appendChild(divTodoTitle);
    todoCard.appendChild(buttonExpand);
    todoCard.appendChild(todoBody);
    todosList.appendChild(todoCard);
  });
};

const createTodoCheckbox = function (todo, todoCard) {
  const todoCheckbox = document.createElement("input");
  todoCheckbox.setAttribute("type", "checkbox");
  todoCheckbox.classList.add("todo-card__checkbox");
  todoCheckbox.id = `todo-card__checkbox--todo-id-${todo.get("id")}`;
  todoCheckbox.checked = todo.get("checked");
  if (todo.get("checked")) {
    todoCard.classList.add("checked");
  }
  todoCheckbox.addEventListener("click", () =>
    publisher.publish("checkbox clicked", {
      targetElement: todoCheckbox,
      targetTodo: todo,
    }),
  );
  return todoCheckbox;
};

const checkboxClicked = function ({ targetElement, targetTodo }) {
  const isChecked = targetElement.checked;
  targetTodo.set("checked", isChecked);

  if (isChecked) {
    const todoCard = document.getElementById(
      `todo-card--todo-id-${targetTodo.get("id")}`,
    );
    todoCard.classList.add("checked");
  } else {
    const todoCard = document.getElementById(
      `todo-card--todo-id-${targetTodo.get("id")}`,
    );
    todoCard.classList.remove("checked");
  }
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
  divSimple.dataset.todoId = todoId;
  divSimple.id = `todo-card__body-simple--todo-id-${todoId}`;
  divSimple.classList.add("todo-card__body-simple");

  divSimple.addEventListener("click", function () {
    toggleExpandedSection.apply(divSimple);
  });

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
  const projLabel = document.createElement("div");
  projLabel.classList.add("todo-card__label");
  // projLabel.classList.add("todo-card__project-label");
  projLabel.textContent = "Project: ";
  const projName = document.createElement("div");
  projName.classList.add("todo-card__project-name");
  projName.textContent = targetProject.name;
  divExpanded.appendChild(projLabel);
  divExpanded.appendChild(projName);

  // Due Date
  let dueDate = "";
  if (targetTodo.get("dueDate")) {
    dueDate = format(targetTodo.get("dueDate"), "MM-dd-yyyy");
  }
  const dueDateLabel = document.createElement("div");
  dueDateLabel.classList.add("todo-card__label");
  dueDateLabel.textContent = "Due date: ";
  const dueDateDate = document.createElement("div");
  dueDateDate.classList.add("todo-card__due-date-date");
  dueDateDate.textContent = dueDate;
  divExpanded.appendChild(dueDateLabel);
  divExpanded.appendChild(dueDateDate);

  // Description
  const descLabel = document.createElement("div");
  descLabel.classList.add("todo-card__label");
  descLabel.textContent = "Description: ";
  const descBody = document.createElement("div");
  descBody.classList.add("todo-card__description-body");
  descBody.textContent = targetTodo.get("description");
  divExpanded.appendChild(descLabel);
  divExpanded.appendChild(descBody);

  // Priority
  const priorityLabel = document.createElement("div");
  priorityLabel.classList.add("todo-card__label");
  priorityLabel.textContent = "Priority: ";
  const priorityBody = document.createElement("div");
  priorityBody.classList.add("todo-card__priority-body");
  priorityBody.textContent = targetTodo.get("priority");
  divExpanded.appendChild(priorityLabel);
  divExpanded.appendChild(priorityBody);

  // Notes div
  // TODO: Extract "notes" code below to function
  const notesLabel = document.createElement("div");
  notesLabel.classList.add("todo-card__label", "todo-card__label-notes");
  notesLabel.textContent = "Notes:";
  const notesBody = document.createElement("div");
  notesBody.classList.add("todo-card__notes-body");
  const buttonNewNote = document.createElement("button");
  notesBody.appendChild(buttonNewNote);
  buttonNewNote.classList.add("todo-card__button-new-note");
  buttonNewNote.textContent = "+";
  buttonNewNote.addEventListener("click", () => {
    if (buttonNewNote.textContent === "+") {
      buttonNewNote.textContent = "✔";
      const inputNewNote = document.createElement("input");
      inputNewNote.type = "input";
      inputNewNote.classList.add("todo-card__input-note");
      notesBody.prepend(inputNewNote);
      inputNewNote.focus();
    } else if (buttonNewNote.textContent === "✔") {
      const children = notesBody.childNodes;
      const inputNewNote = children[0];
      const replacementNewNote = document.createElement("div");
      replacementNewNote.value = "foo";
      replacementNewNote.textContent = inputNewNote.value;
      replacementNewNote.classList.add("todo-card__note");
      notesBody.replaceChild(replacementNewNote, inputNewNote);
      buttonNewNote.textContent = "+";
    }
  });

  divExpanded.appendChild(notesLabel);
  divExpanded.appendChild(notesBody);

  // Checklist items div
  // const divChecklistItems = document.createElement("div");
  // divChecklistItems.classList.add("todo-card__checklist-items");
  // divChecklistItems.textContent = "Checklist items go here";
  // divExpanded.appendChild(divChecklistItems);

  const divExtraTodoButtons = createDivExtraButtons(todoId);
  divExpanded.appendChild(divExtraTodoButtons);
  return divExpanded;
};

const createTodoCardNotes = function () {
  const divNotes = document.createElement("div");
  divNotes.classList.add("todo-card__notes");

  const divNotesTitle = document.createElement("h3");
  divNotesTitle.textContent = "Notes:";
  divNotes.appendChild(divNotesTitle);

  // const buttonNewNote = document.createElement("button");
  // buttonNewNote.textContent = "+ note";
  // buttonNewNote.addEventListener("click", () => {
  // const inputNewNote = document.createElement("input");
  // inputNewNote.type = "text";
  // divNotes.appendChild(inputNewNote);
  // inputNewNote.focus();
  // });
  // divNotes.appendChild(buttonNewNote);

  return divNotes;
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

const createDivExtraButtons = function (todoId) {
  const divTodoButtons = document.createElement("div");
  divTodoButtons.classList.add("todo-card__extra-buttons");
  const button1 = document.createElement("button");
  button1.classList.add(
    "todo-card__extra-button",
    "todo-card__extra-button--edit",
  );
  button1.textContent = "🖉 Edit";
  button1.addEventListener("click", function () {
    publisher.publish("open modal", todoId);
  });
  const button2 = document.createElement("button");
  button2.classList.add(
    "todo-card__extra-button",
    "todo-card__extra-button--delete",
  );
  button2.textContent = "🗑 Delete";
  button2.addEventListener("click", function () {
    publisher.publish("delete todo", todoId);
  });

  divTodoButtons.appendChild(button1);
  divTodoButtons.appendChild(button2);
  return divTodoButtons;
};

export const updateMainViewTitle = function () {
  const { lastViewConstraint, lastViewValue } = localData.config;
  const mainViewType = document.querySelector(".main__view-title-label");
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

  updateViewIcon();
};

const updateViewIcon = function () {
  const { lastViewConstraint, lastViewValue } = localData.config;
  const viewTitleIcon = document.querySelector(".main__view-title-icon");
  viewTitleIcon.textContent = "";

  let icon;

  switch (lastViewValue) {
    case "all":
      icon = new Image();
      icon.src = All;
      icon.alt = "An icon of a series of lines which represents all todos.";
      break;
    case "today":
      icon = new Image();
      icon.src = Star;
      icon.alt = "An icon of a star which represents today's todos.";
      break;
    case "upcoming":
      icon = new Image();
      icon.src = Calendar;
      icon.alt = "An icon of a calendar which represents upcoming todos.";
      break;
    default:
      icon = new Image();
      icon.src = Project;
      icon.alt = "An icon which represents a project.";
  }

  viewTitleIcon.appendChild(icon);
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
broker.subscribe("save todo", sortProjectTodosByDateAsc);
broker.subscribe("save todo", saveLocalData);

broker.subscribe("delete todo", deleteTodo);
broker.subscribe("delete todo", saveLocalData);

broker.subscribe("change view", changeView);
broker.subscribe("change view", navClose);
broker.subscribe("change view", saveLocalData);

broker.subscribe("checkbox clicked", checkboxClicked);
broker.subscribe("checkbox clicked", saveLocalData);

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
    publisher.publish("open modal");
  });
// Publish event for first load
publisher.publish("start up");
