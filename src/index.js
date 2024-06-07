import "./global.css";
import "./style.css";
import { saveLocalData, loadLocalData, hasStorage } from "./readWrite";
import { openModal, updateDropdown } from "./modal";
import { createProject, formatDateYmd } from "./utilities";
import { filterTodos } from "./filters";
import { populateNavTimeframes, populateNavProjects } from "./nav";

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

const initializeNewData = function () {
  createProject("default");
};

const populateMainTodos = function () {
  const { lastViewConstraint } = localData.config;
  const { lastViewValue } = localData.config;

  const filteredTodos = filterTodos(lastViewConstraint, lastViewValue);

  const todosUl = document.querySelector(".main__todos");
  todosUl.innerHTML = "";

  filteredTodos.forEach((todo) => {
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("main__todos-title");
    titleDiv.textContent = todo.get("title");
    titleDiv.dataset.projectId = todo.get("projectId");
    titleDiv.dataset.todoId = todo.get("id");
    titleDiv.addEventListener("click", openModal);
    todosUl.appendChild(titleDiv);
    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("main__todos-due-date");

    const dueDate = todo.get("dueDate");
    if (dueDate) {
      dueDateDiv.textContent = formatDateYmd(dueDate);
    }

    todosUl.appendChild(dueDateDiv);
  });
};

export const refreshUI = function () {
  populateMainTodos();
  updateDropdown();
  populateNavTimeframes();
  populateNavProjects();
};

if (!hasStorage("localStorage")) alert("Warning: Unable to save locally.");
loadLocalData(localData);
if (localData.config.projectCounter === 0) initializeNewData();
refreshUI();
