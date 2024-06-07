import { localData, allTodos } from "./index";
import { formatDateYmd } from "./utilities";

const filterToday = function () {
  const today = formatDateYmd(new Date());
  return allTodos().filter((todo) => {
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

export const todosFilteredByView = function (timeframe) {
  let todos = [];

  if (timeframe === "today") {
    todos = filterToday();
  } else if (timeframe === "upcoming") {
    todos = filterUpcoming();
  } else if (timeframe === "all") {
    todos = allTodos();
  }

  console.log("hello from todosFilteredByView: ");
  console.log(todos);

  return todos;
};
