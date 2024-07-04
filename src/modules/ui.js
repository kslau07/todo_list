import { localData, filterTodos } from './storage';

// Import images
import All from '../assets/all.svg';
import Calendar from '../assets/calendar.svg';
import Star from '../assets/star.svg';
import Project from '../assets/project.svg';
import LeftArrow from '../assets/left-arrow.svg';

export const updateViewIconDelegated = function () {
  const { lastViewValue } = localData.config;
  const viewTitleIcon = document.querySelector('.main__view-title-icon');
  viewTitleIcon.textContent = '';

  let icon;

  switch (lastViewValue) {
    case 'all':
      icon = new Image();
      icon.src = All;
      icon.alt = '';
      break;
    case 'today':
      icon = new Image();
      icon.src = Star;
      icon.alt = '';
      break;
    case 'upcoming':
      icon = new Image();
      icon.src = Calendar;
      icon.alt = '';
      break;
    default:
      icon = new Image();
      icon.src = Project;
      icon.alt = '';
  }

  viewTitleIcon.appendChild(icon);
};

export const populateMainTodos = function () {
  const { lastViewConstraint, lastViewValue } = localData.config;
  const filteredTodos = filterTodos(lastViewConstraint, lastViewValue);
  const todosList = document.querySelector('.main__todos-list');
  todosList.innerHTML = '';

  if (filteredTodos.length === 0) {
    todosList.textContent = 'No todos to show.';
  }

  filteredTodos.forEach((todo) => {
    const todoId = todo.get('id');
    const projectId = todo.get('projectId');
    const todoCard = document.createElement('div');
    todoCard.classList.add('todo-card');
    todoCard.id = `todo-card--todo-id-${todo.get('id')}`;

    const todoCheckbox = createTodoCheckbox(todo, todoCard);

    const divTodoTitle = document.createElement('div');
    const spanTodoTitle = document.createElement('span');
    spanTodoTitle.classList.add('todo-card__title');
    spanTodoTitle.textContent = todo.get('title');
    spanTodoTitle.dataset.projectId = projectId;
    spanTodoTitle.dataset.todoId = todoId;
    spanTodoTitle.addEventListener('click', function () {
      toggleExpandedSection.apply(spanTodoTitle);
    });
    divTodoTitle.appendChild(spanTodoTitle);

    if (todo.get('priority') === 'high') {
      const spanPriorityHigh = document.createElement('span');
      spanPriorityHigh.classList.add('todo-card__priority-flag');
      spanPriorityHigh.textContent = ' ⚑';
      divTodoTitle.appendChild(spanPriorityHigh);
    }

    const buttonExpand = createButtonExpandedSection(todoId);
    buttonExpand.dataset.projectId = projectId;

    const todoBody = createTodoBody(todoId);

    todoCard.appendChild(todoCheckbox);
    todoCard.appendChild(divTodoTitle);
    todoCard.appendChild(buttonExpand);
    todoCard.appendChild(todoBody);
    todosList.appendChild(todoCard);
  });
};

// Modals

import { format } from 'date-fns';
import {
  localData,
  getDropdownSelection,
  createProject,
  findProject,
  findTodo,
  createOrUpdateTodo,
} from './storage';

const resetForm = function () {
  document.querySelector('.modal__title').textContent = 'New Todo';
  document.querySelector('.form__todo-title-input').value = '';
  document.querySelector('.form__todo-description-input').value = '';
  document.querySelector('.form__date-input').value = '';
  document.querySelector('.form__create-project-input').value = '';
  document.querySelector('.form__priority-select').selectedIndex = 1;

  const hiddenInput = document.querySelector('.form__hidden-input');
  hiddenInput.dataset.action = 'create';
  hiddenInput.dataset.projectId = '';
  hiddenInput.dataset.todoId = '';

  const inputRequired = document.querySelector('.form__create-project-input');
  inputRequired.required = false;

  // Reset dropdown/create new
  const dropdown = document.querySelector('.form__projects-select');

  const projIndex = 0;

  dropdown.selectedIndex = projIndex;
  document.querySelector('.form__create-project-container').style.display = 'none';
  dropdown.disabled = false;
};

export const openModal = function (todoId) {
  // Select corresponding project if user has chosen to view by project
  if (localData.config.lastViewConstraint === 'project') {
    const projName = localData.config.lastViewValue;
    const project = findProject('name', projName);
    const projIndex = localData.projects.findIndex((proj) => proj.id === project.id);
    const dropdownProjects = document.querySelector('.form__projects-select');
    dropdownProjects.selectedIndex = projIndex;
  }

  const modal = document.querySelector('.modal');
  const backdrop = document.querySelector('.backdrop');
  modal.classList.add('show');
  backdrop.classList.add('show');

  if (todoId) {
    editExistingTodo(todoId);
  }
};

const buttonCloseModal = document.querySelector('.button-close-modal');
export const closeModal = function (cancelClicked = false) {
  const inputTodoTitle = document.querySelector('.form__todo-title-input');
  if (inputTodoTitle.value === '' && cancelClicked === false) return;

  const modal = document.querySelector('.modal');
  const backdrop = document.querySelector('.backdrop');
  modal.classList.remove('show');
  backdrop.classList.remove('show');

  setTimeout(resetForm, 300);
};
buttonCloseModal.addEventListener('click', () => {
  closeModal(true);
});
const buttonCloseModalX = document.querySelector('.modal__button-close');
buttonCloseModalX.addEventListener('click', () => {
  closeModal(true);
});

export const updateDropdown = function () {
  const dropdown = document.querySelector('.form__projects-select');
  dropdown.innerHTML = '';

  localData.projects.forEach((project) => {
    const option = document.createElement('option');
    option.textContent = project.name;
    option.dataset.action = 'find-project';
    option.dataset.projectId = project.id;
    dropdown.appendChild(option);
  });

  const newProjectOption = document.createElement('option');
  newProjectOption.dataset.action = 'create-project';
  newProjectOption.textContent = 'Create new...';
  dropdown.appendChild(newProjectOption);
};

const displayCreateProjectField = () => {
  const selection = getDropdownSelection(dropdown);
  const createProjectContainer = document.querySelector('.form__create-project-container');
  const inputRequired = document.querySelector('.form__create-project-input');

  if (selection.dataset.action === 'create-project') {
    createProjectContainer.style.display = 'initial';
    inputRequired.required = true;
  } else {
    createProjectContainer.style.display = 'none';
    inputRequired.required = false;
  }
};

const dropdown = document.querySelector('.form__projects-select');
dropdown.addEventListener('click', displayCreateProjectField);

const isInputValid = function (inputElem) {
  const condition1 = inputElem.required && inputElem.value !== '';
  const condition2 = inputElem.required === false;

  return condition1 || condition2 ? true : false;
};

export const saveTodo = function () {
  const projectsDropdown = document.querySelector('.form__projects-select');
  const selectedProject = getDropdownSelection(projectsDropdown);
  const todoTitle = document.querySelector('.form__todo-title-input').value;
  const todoDescription = document.querySelector('.form__todo-description-input').value;
  const dueDate = document.querySelector('.form__date-input').value;

  const priorityDropdown = document.querySelector('.form__priority-select');
  const selectedPriority = getDropdownSelection(priorityDropdown);

  const dataAction = document.querySelector('.form__hidden-input').dataset.action;
  const dataProjectId = document.querySelector('.form__hidden-input').dataset.projectId;
  const dataTodoId = document.querySelector('.form__hidden-input').dataset.todoId;
  const createProjectInput = document.querySelector('.form__create-project-input');

  if (!todoTitle == '' && isInputValid(createProjectInput)) {
    const targetProject =
      selectedProject.dataset.action === 'create-project'
        ? createProject(createProjectInput.value)
        : findProject('id', selectedProject.dataset.projectId);
    const todoDataAttrs = {
      action: dataAction,
      projectId: dataProjectId,
      todoId: dataTodoId,
    };

    const todoFieldData = {
      title: todoTitle,
      description: todoDescription,
      projectId: targetProject.id,
      dueDate: dueDate,
      priority: selectedPriority.value,
    };
    createOrUpdateTodo(todoDataAttrs, todoFieldData);
  }
};

const editExistingTodo = function (todoId) {
  const todo = findTodo('id', todoId);
  const project = findProject('id', todo.get('projectId'));
  const modalTitle = document.querySelector('.modal__title');
  modalTitle.textContent = 'Edit Todo';
  const inputTitle = document.querySelector('.form__todo-title-input');
  inputTitle.value = todo.get('title');
  const inputDescription = document.querySelector('.form__todo-description-input');
  inputDescription.value = todo.get('description');
  const dropdownProjects = document.querySelector('.form__projects-select');
  const projIndex = localData.projects.findIndex((proj) => proj.id === project.id);
  dropdownProjects.selectedIndex = projIndex;
  dropdownProjects.disabled = true;

  const dropdownPriority = document.querySelector('.form__priority-select');
  const priority = todo.get('priority');
  dropdownPriority.selectedIndex = priority === 'high' ? 0 : priority === 'medium' ? 1 : 2;

  const dateInput = document.querySelector('.form__date-input');
  const todoDueDate = todo.get('dueDate');
  if (todoDueDate) {
    dateInput.value = format(todoDueDate, 'yyyy-MM-dd');
  }

  const hiddenInput = document.querySelector('.form__hidden-input');
  hiddenInput.dataset.action = 'update';
  hiddenInput.dataset.projectId = project.id;
  hiddenInput.dataset.todoId = todo.get('id');
};

// Nav

// Import images
import Checkmark from '../assets/checkmark.svg';

const logo = document.querySelector('.logo');
const checkmark = new Image();
checkmark.src = Checkmark;
checkmark.classList.add('logo-image');
logo.insertBefore(checkmark, logo.childNodes[1]);

const nav = document.querySelector('.nav');

export const navOpen = function () {
  nav.classList.add('open');
};

export const navClose = function () {
  nav.classList.remove('open');
};

const navCloseButton = document.querySelector('.nav__button-close');
navCloseButton.addEventListener('click', navClose);

export const populateNavTimeframes = function () {
  const timeframes = ['all', 'today', 'upcoming'];
  const navListPrimary = document.querySelector('.nav__list--primary');
  navListPrimary.innerHTML = '';

  for (const timeframe of timeframes) {
    const listItem = document.createElement('li');
    listItem.classList.add('nav__item');
    const listItemLink = document.createElement('a');
    listItemLink.classList.add('nav__link-timeframe');
    listItemLink.classList.add(`nav__link-timeframe-${timeframe}`);
    listItemLink.href = '#';
    listItemLink.text = [timeframe.charAt(0).toUpperCase(), timeframe.slice(1)].join(''); // Capitalize word

    listItemLink.addEventListener('click', () =>
      publisher.publish('change view', {
        constraint: 'timeframe',
        value: timeframe,
      })
    );

    listItem.appendChild(listItemLink);
    navListPrimary.appendChild(listItem);
  }
};

export const populateNavProjects = function () {
  const navListSecondary = document.querySelector('.nav__list--secondary');
  navListSecondary.innerHTML = '';
  const { projects } = localData;

  projects.forEach((project) => {
    const listItem = document.createElement('li');
    listItem.classList.add('nav__item');
    const listItemLink = document.createElement('a');
    listItemLink.classList.add('nav__link-project');
    listItemLink.href = '#';
    listItemLink.text = project.name;

    listItemLink.addEventListener('click', () =>
      publisher.publish('change view', {
        constraint: 'project',
        value: project.name,
      })
    );

    listItem.appendChild(listItemLink);
    navListSecondary.appendChild(listItem);
  });
};

// const changeViewTimeframe = function () {
//   const selectedView = this.textContent;
//   const constraint = 'timeframe';
//   localData.config.lastViewConstraint = constraint;
//   localData.config.lastViewValue = selectedView.toLowerCase();
//   updateMainViewTitle(constraint, selectedView);
// };

// const changeViewProject = function () {
//   const selectedProjectName = this.textContent;
//   const constraint = 'project';
//   localData.config.lastViewConstraint = constraint;
//   localData.config.lastViewValue = selectedProjectName;
//   updateMainViewTitle(constraint, selectedProjectName);
// };

export const changeView = function ({ constraint, value }) {
  localData.config.lastViewConstraint = constraint;
  localData.config.lastViewValue = value;
};
