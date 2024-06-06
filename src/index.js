import "./global.css";
import "./style.css";
import { saveLocalData, loadLocalData, hasStorage } from "./readWrite";
import { openModal, updateDropdown } from "./modal";
import { createProject } from "./utilities";
import { filteredTodos } from "./filters";

export const localData = {
  projects: [],
  settings: {
    projectCounter: 0,
    todoCounter: 0,
    lastView: "today",
    lastProject: "default",
  },
};

const initializeWithDefaultProject = function () {
  createProject("default");
};

const populateTodos = function () {
  filteredTodos();

  const todosUl = document.querySelector(".main__todos");
  todosUl.innerHTML = "";

  localData.projects.forEach((project) => {
    project.todos.forEach((todo) => {
      const titleDiv = document.createElement("div");
      titleDiv.classList.add("main__todos-title");
      titleDiv.textContent = todo.get("title");
      titleDiv.dataset.projectId = todo.get("projectId");
      titleDiv.dataset.todoId = todo.get("id");
      titleDiv.addEventListener("click", openModal);
      todosUl.appendChild(titleDiv);
      const dueDateDiv = document.createElement("div");
      dueDateDiv.classList.add("main__todos-due-date");
      dueDateDiv.textContent = todo.get("dueDate");
      todosUl.appendChild(dueDateDiv);
    });
  });
};

export const refreshUI = function () {
  populateTodos();
  updateDropdown();
};

if (!hasStorage("localStorage")) alert("Warning: Unable to save locally.");
if (localData.settings.projectCounter === 0) initializeWithDefaultProject();
loadLocalData(localData);
refreshUI();
