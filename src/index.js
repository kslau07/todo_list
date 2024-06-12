import "./global.css";
import "./style.css";
import { saveLocalData, loadLocalData, hasStorage } from "./readWrite";
import { openModal, updateDropdown, saveTodo, closeModal } from "./modal";
import { createProject, formatDateYmd } from "./utilities";
import { filterTodos } from "./filters";
import { populateNavTimeframes, populateNavProjects } from "./nav";

// Implement pub-sub pattern
import createBroker from "./Broker";
import createPublisher from "./Publisher";
export const broker = createBroker();
export const publisher = createPublisher(broker);

// Button clicks, link clicks, etc. become published events
document
  .querySelector(".button-save-todo")
  .addEventListener("click", () => publisher.publish("save todo"));

// Subscriptions
broker.subscribe("save todo", saveTodo);
broker.subscribe("save todo", closeModal);
broker.subscribe("save todo", saveLocalData);

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

export const updateMainViewTitle = function (constraint, value) {
  const mainViewType = document.querySelector(".main__title-view-type");
  const mainViewValue = document.querySelector(".main__title-view-value");
  mainViewValue.textContent = value;

  if (constraint == "timeframe") {
    mainViewType.textContent = "View: ";
    mainViewValue.classList.add("main__title-view-by-timeframe");
    mainViewValue.classList.remove("main__title-view-by-project");
  } else if (constraint === "project") {
    mainViewType.textContent = "View by Project: ";
    mainViewValue.classList.add("main__title-view-by-project");
    mainViewValue.classList.remove("main__title-view-by-timeframe");
  }
};

export const refreshUI = function () {
  console.log("hello from refreshUI");

  populateMainTodos();
  updateDropdown();
  populateNavTimeframes();
  populateNavProjects();
};

if (!hasStorage("localStorage")) alert("Warning: Unable to save locally.");
loadLocalData(localData);
if (localData.config.projectCounter === 0) initializeNewData();
refreshUI();

document.cookie = "colortheme=light";
const cookie = document.cookie;
console.log(cookie);

// Create a real subscriber now
// A subscriber waits for an event to happen and then is alerted that the event took place
// The subscriber will be given a payload, then decide what to do with the new information

// What are the events and who are the subscribers?
// * event: "changeView", payload: {constraint: "timeframe", value: "all"}
//   Who would care?
//   - main -> update veiw title
//   - main -> populate todo list
//   - nav -> project should be highlighted
//
// * event: "addTodo", payload: { ??? }
//   Who would care?
//   - main -> Redraw UI

// Who cares about these events?
// const subscriber1 = (data) => console.log("hello i am subscriber1", data);
// const subscriber2 = (data) => console.log("hello, subscriber2 here", data);
// broker.subscribe("important event", subscriber1);
// broker.subscribe("notable event", subscriber2);
// broker.unsubscribe("important event", subscriber1);
// broker.unsubscribe("notable event", subscriber2);

// publisher.publish("important event", "payload sent");
// publisher.publish("notable event", "another payload sent");
// broker.getSubscriptions();
