import { localData } from "./index";
export const getDropdownSelection = function (dropdownElement) {
  return dropdownElement.options[dropdownElement.selectedIndex];
};

export const createProject = function (name) {
  const dataType = "project";
  const id = nextId("project");
  const todos = [];
  const newProject = { dataType, id, name, todos };
  localData.projects.push(newProject);
  return newProject;
};

export const findProject = (key, value) => {
  return localData.projects.find((project) => project[key] == value);
};

const nextId = function (dataType) {
  const counterType = dataType === "project" ? "projectCounter" : "todoCounter";

  return (localData.config[counterType] = localData.config[counterType] + 1);
};

export const findTodo = function (key, value, projectId) {
  const project = findProject("id", projectId);
  return project.todos.find((todo) => todo.get(key) == value);
};

const createTodo = function (project) {
  const newTodo = new Map();
  newTodo.set("dataType", "todo");
  newTodo.set("id", nextId("todo"));
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
    let value;
    if (key === "dueDate" && fieldData[key]) {
      const dateSplit = fieldData[key].split("-");
      const yr = dateSplit[0];
      const month = dateSplit[1];
      const day = dateSplit[2];
      const date = new Date(yr, month - 1, day, 0, 0, 0);
      value = date;
    } else {
      value = fieldData[key];
    }
    targetTodo.set(key, value);
  }

  return targetTodo;
};

export const formatDateYmd = function (dateObject) {
  const year = dateObject.getFullYear();
  const month = ("0" + (dateObject.getMonth() + 1)).slice(-2); // month is zero-indexed, also pad zero
  const day = ("0" + dateObject.getDate()).slice(-2);

  return [year, month, day].join("-");
};
