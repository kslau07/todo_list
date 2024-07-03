import { localData, allTodos } from '../index';

export const getDropdownSelection = function (dropdownElement) {
  return dropdownElement.options[dropdownElement.selectedIndex];
};

export const createProject = function (name) {
  const dataType = 'project';
  const id = nextId('project');
  const todos = [];
  const newProject = { dataType, id, name, todos };
  localData.projects.push(newProject);
  return newProject;
};

export const findProject = (key, value) => {
  return localData.projects.find((project) => project[key] == value);
};

const nextId = function (dataType) {
  const counterType = dataType === 'project' ? 'projectCounter' : 'todoCounter';

  return (localData.config[counterType] = localData.config[counterType] + 1);
};

export const findTodo = function (key, value) {
  const todos = allTodos();
  return todos.find((todo) => todo.get(key) == value);
};

const createTodo = function (project) {
  const newTodo = new Map();
  newTodo.set('dataType', 'todo');
  newTodo.set('checked', false);
  newTodo.set('id', nextId('todo'));
  project.todos.push(newTodo);
  return newTodo;
};

export const deleteTodo = function (todoId) {
  const todo = findTodo('id', todoId);
  const project = findProject('id', todo.get('projectId'));
  const idx = project.todos.findIndex((todo) => todo.get('id') == todoId);
  project.todos.splice(idx, 1);
};

export const createOrUpdateTodo = function (dataAttrs, fieldData) {
  let targetTodo;
  const project = findProject('id', fieldData.projectId);

  if (dataAttrs.action === 'create') {
    targetTodo = createTodo(project);
  } else if (dataAttrs.action === 'update') {
    targetTodo = findTodo('id', dataAttrs.todoId);
  }

  for (const key in fieldData) {
    let value;
    if (key === 'dueDate' && fieldData[key]) {
      const dateSplit = fieldData[key].split('-');
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

  localData.config.lastUnsortedProjectId = project.id;
  project.sorted = false;

  return targetTodo;
};

function compareDatesAsc(todoCurr, todoNext) {
  if (!todoCurr.get('dueDate')) return -1;

  if (todoCurr.get('dueDate') < todoNext.get('dueDate')) {
    return -1;
  }
  if (todoCurr.get('dueDate') > todoNext.get('dueDate')) {
    return 1;
  }
  return 0;
}

export const sortProjectTodosByDateAsc = function () {
  const { lastUnsortedProjectId } = localData.config;
  const targetProject = findProject('id', lastUnsortedProjectId);

  if (targetProject.sorted === false) {
    targetProject.todos.sort(compareDatesAsc);
  }

  targetProject.sorted = true;
};
