import { localData, allTodos } from "./index";
import { findProject, formatDateYmd } from "./utilities";

const filterToday = function () {
  const today = formatDateYmd(new Date());
  return allTodos().filter((todo) => {
    if (!todo.get("dueDate")) return false;

    const dueDate = formatDateYmd(todo.get("dueDate"));
    return today === dueDate;
  });
};

const filterUpcoming = function () {
  const today = new Date();
  return allTodos().filter((todo) => {
    const dueDate = todo.get("dueDate");
    return today < dueDate;
  });
};

const filterTodosByTimeframe = function (timeframe) {
  switch (timeframe) {
    case "today":
      return filterToday();
      break;
    case "upcoming":
      return filterUpcoming();
      break;
    case "all":
      return allTodos();
  }
};

const filterTodosByProject = function (projectName) {
  const targetProject = findProject("name", projectName);
  const { todos } = targetProject;
  return todos;
};

export const filterTodos = function (constraint, value) {
  let todos;
  if (constraint === "timeframe") {
    todos = filterTodosByTimeframe(value);
  } else if (constraint === "project") {
    todos = filterTodosByProject(value);
  }
  return todos;
};