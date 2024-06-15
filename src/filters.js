import { localData, allTodos } from "./index";
import { findProject, formatDateYmd } from "./utilities";
import { format } from "date-fns";

const filterToday = function () {
  // const today = formatDateYmd(new Date());
  const today = format(new Date(), "yyyy-MM-dd");
  // dueDate = format(targetTodo.get("dueDate"), "MM-dd-yyyy");
  // const today = formatDateYmd(new Date());
  return allTodos().filter((todo) => {
    if (!todo.get("dueDate")) return false;

    const dueDate = format(todo.get("dueDate"), "yyyy-MM-dd");
    // const dueDate = formatDateYmd(todo.get("dueDate"));
    // dueDate = format(targetTodo.get("dueDate"), "MM-dd-yyyy");
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

export const filterTodos = function () {
  const { lastViewConstraint, lastViewValue } = localData.config;

  let todos;
  if (lastViewConstraint === "timeframe") {
    todos = filterTodosByTimeframe(lastViewValue);
  } else if (lastViewConstraint === "project") {
    todos = filterTodosByProject(lastViewValue);
  }
  return todos;
};
