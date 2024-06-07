import "./global.css";
import "./style.css";
import { saveLocalData, loadLocalData, hasStorage } from "./readWrite";
import { openModal, updateDropdown } from "./modal";
import { createProject, formatDateYmd } from "./utilities";
import { todosFilteredByView } from "./filters";

export const localData = {
  projects: [],
  config: {
    projectCounter: 0,
    todoCounter: 0,
    lastView: "all",
    lastProject: "default",
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

const populateTodos = function () {
  const { lastView } = localData.config;
  console.log("hello from populateTodos");
  console.log("lastView: ");
  console.log(lastView);
  const filteredTodos = todosFilteredByView(lastView);

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
  populateTodos();
  updateDropdown();
};

if (!hasStorage("localStorage")) alert("Warning: Unable to save locally.");
loadLocalData(localData);
if (localData.config.projectCounter === 0) initializeNewData();
refreshUI();
