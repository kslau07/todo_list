import { refreshUI } from './ui';
import { format } from '../index';

// localStorage, CRUD operations

const initialLocalData = {
  projects: [],
  config: {
    projectCounter: 0,
    todoCounter: 0,
    lastViewConstraint: 'timeframe',
    lastViewValue: 'all',
  },
};

export const localData = { ...initialLocalData };

// SOURCE: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export const hasStorage = (type) => (storageAvailable(type) ? true : false);

// The replacer() function helps serialize data (when persisting Map objects)
const replacer = function (key, value) {
  if (value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  } else {
    return value;
  }
};

// The replacer() function helps deserialize data (to recreate Map objects)
function reviver(key, value) {
  if (typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    } else if (value[0] === 'dueDate' && value[1] !== '') {
      // Restore Date object from date string
      value[1] = new Date(value[1]);
      return value;
    }
  }

  return value;
}

export const saveLocalData = function () {
  if (!hasStorage('localStorage')) return;

  localStorage.setItem('localData', JSON.stringify(localData, replacer));
  refreshUI();
};

export const loadLocalData = function () {
  if (!localStorage.getItem('localData')) return;

  const localDataStr = localStorage.getItem('localData');
  const loadedLocalData = JSON.parse(localDataStr, reviver);
  localData.projects = [...loadedLocalData.projects];
  localData.config = { ...loadedLocalData.config };
};

// Filters

export const allTodos = function () {
  const todosArray = [];
  localData.projects.forEach((project) => {
    project.todos.forEach((todo) => todosArray.push(todo));
  });
  return todosArray;
};

const filterToday = function () {
  const today = format(new Date(), 'yyyy-MM-dd');

  return allTodos().filter((todo) => {
    if (!todo.get('dueDate')) return false;

    const dueDate = format(todo.get('dueDate'), 'yyyy-MM-dd');
    return today === dueDate;
  });
};

const filterUpcoming = function () {
  const today = new Date();
  return allTodos().filter((todo) => {
    const dueDate = todo.get('dueDate');
    return today < dueDate;
  });
};

const filterTodosByTimeframe = function (timeframe) {
  switch (timeframe) {
    case 'today':
      return filterToday();
    case 'upcoming':
      return filterUpcoming();
    case 'all':
      return allTodos();
  }
};

const filterTodosByProject = function (projectName) {
  const targetProject = findProject('name', projectName);
  const { todos } = targetProject;
  return todos;
};

export const filterTodos = function () {
  const { lastViewConstraint, lastViewValue } = localData.config;
  let todos;

  if (lastViewConstraint === 'timeframe') {
    todos = filterTodosByTimeframe(lastViewValue);
  } else if (lastViewConstraint === 'project') {
    todos = filterTodosByProject(lastViewValue);
  }

  return todos;
};

export const getDropdownSelection = function (dropdownElement) {
  return dropdownElement.options[dropdownElement.selectedIndex];
};

export const createProject = function (name) {
  const dataType = 'project';
  const id = nextId('project');
  const todos = [];
  const unsorted = false;
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

  // Set 'targetTodo' to an existing todo, or a new todo
  if (dataAttrs.action === 'create') {
    targetTodo = createTodo(project);
  } else if (dataAttrs.action === 'update') {
    targetTodo = findTodo('id', dataAttrs.todoId);
  }

  setTodoValues(targetTodo, dataAttrs, fieldData);

  localData.config.lastUnsortedProjectId = project.id; // Project now contains an unsorted todo array
  project.unsorted = true;

  return targetTodo;
};

// Take form inputs and set key-value data in the todo object
const setTodoValues = function (targetTodo, dataAttrs, fieldData) {
  for (const key in fieldData) {
    let value;

    // If user has specified a dueDate, create a date object
    if (key === 'dueDate' && fieldData[key] !== '') {
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
};

function compareDatesAsc(todoCurr, todoNext) {
  if (!todoCurr.get('dueDate')) return -1;

  if (todoCurr.get('dueDate') > todoNext.get('dueDate')) {
    return 1;
  } else if (todoCurr.get('dueDate') < todoNext.get('dueDate')) {
    return -1;
  }

  return 0;
}

export const sortProjectTodosByDateAsc = function () {
  const { lastUnsortedProjectId } = localData.config;
  const targetProject = findProject('id', lastUnsortedProjectId);
  if (targetProject.unsorted === false) return;

  targetProject.todos.sort(compareDatesAsc);
  targetProject.unsorted = false;
};
