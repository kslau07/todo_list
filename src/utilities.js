import { projects } from "./index";
export const getDropdownSelection = function (dropdownElement) {
  return dropdownElement.options[dropdownElement.selectedIndex];
};

export const createProject = function (name) {
  const dataType = "project";
  const id = projects.length + 1;
  const todos = [];
  const newProject = { dataType, id, name, todos };
  projects.push(newProject);
  return newProject;
};

export const findProject = (key, value) => {
  return projects.find((project) => project[key] == value);
};

const incrementTodoId = function (project) {
  if (project.todos.length === 0) return 1;

  const lastTodo = project.todos[project.todos.length - 1];
  return lastTodo.get("id") + 1;
};

export const findTodo = function (key, value, projectId) {
  const project = findProject("id", projectId);
  return project.todos.find((todo) => todo.get(key) == value);
};

const createTodo = function (project) {
  const newTodo = new Map();
  newTodo.set("dataType", "todo");
  newTodo.set("id", incrementTodoId(project));
  project.todos.push(newTodo);
  return newTodo;
};

export const createOrUpdateTodo = function (dataAttrs, fieldData) {
  let targetTodo;
  const project = findProject("id", fieldData.projectId);

  if (dataAttrs.action === "create") {
    targetTodo = createTodo(project);
  } else if (dataAttrs.action === "update") {
    targetTodo = findTodo("id", dataAttrs.todoId, dataAttrs.projectId);
  }

  for (const key in fieldData) {
    const value = fieldData[key];
    targetTodo.set(key, value);
  }

  return targetTodo;
};
