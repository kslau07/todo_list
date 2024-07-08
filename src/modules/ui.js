import {
  createOrUpdateTodo,
  createProject,
  filterTodos,
  findProject,
  findTodo,
  getDropdownSelection,
  localData,
} from './storage';
import { publisher, format } from '../index';

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

const createTodoCheckbox = function (todo, todoCard) {
  const todoCheckbox = document.createElement('input');
  todoCheckbox.setAttribute('type', 'checkbox');
  todoCheckbox.classList.add('todo-card__checkbox');
  todoCheckbox.id = `todo-card__checkbox--todo-id-${todo.get('id')}`;
  todoCheckbox.checked = todo.get('checked');

  if (todo.get('checked')) {
    todoCard.classList.add('checked');
  }

  // Apply style and persist checked status
  todoCheckbox.addEventListener('click', () =>
    publisher.publish('checkbox clicked', {
      targetElement: todoCheckbox,
      targetTodo: todo,
    })
  );

  return todoCheckbox;
};

export const checkboxClicked = function ({ targetElement, targetTodo }) {
  const isChecked = targetElement.checked;
  targetTodo.set('checked', isChecked);

  if (isChecked) {
    const todoCard = document.getElementById(`todo-card--todo-id-${targetTodo.get('id')}`);
    todoCard.classList.add('checked');
  } else {
    const todoCard = document.getElementById(`todo-card--todo-id-${targetTodo.get('id')}`);
    todoCard.classList.remove('checked');
  }
};

const toggleExpandedSection = function () {
  const buttonExpand = document.querySelector(
    `#button-expanded-section--todo-id-${this.dataset.todoId}`
  );
  buttonExpand.classList.toggle('show');
  const divTodoBodySimple = document.querySelector(
    `#todo-card__body-simple--todo-id-${this.dataset.todoId}`
  );
  divTodoBodySimple.classList.toggle('show');
  const divTodoBodyExpanded = document.querySelector(
    `#todo-card__body-expanded--todo-id-${this.dataset.todoId}`
  );
  divTodoBodyExpanded.classList.toggle('show');
};

const createButtonExpandedSection = function (todoId) {
  const button = document.createElement('button');
  button.type = 'button';
  button.id = `button-expanded-section--todo-id-${todoId}`;
  button.classList.add('button-expanded-section');
  button.dataset.todoId = todoId;
  button.addEventListener('click', toggleExpandedSection);
  const leftArrow = new Image();
  leftArrow.src = LeftArrow;
  leftArrow.alt = 'A left arrow that expands this todo';
  button.appendChild(leftArrow);
  return button;
};

const createTodoBodySimple = function (todoId) {
  const targetTodo = findTodo('id', todoId);
  const targetProject = findProject('id', targetTodo.get('projectId'));
  const divSimple = document.createElement('div');
  divSimple.dataset.todoId = todoId;
  divSimple.id = `todo-card__body-simple--todo-id-${todoId}`;
  divSimple.classList.add('todo-card__body-simple');

  divSimple.addEventListener('click', () => {
    toggleExpandedSection.apply(divSimple);
  });

  divSimple.textContent = targetProject.name;
  divSimple.classList.add('show');
  return divSimple;
};

const createTodoBodyExpanded = function (todoId) {
  const targetTodo = findTodo('id', todoId);
  const targetProject = findProject('id', targetTodo.get('projectId'));
  const divExpanded = document.createElement('div');
  divExpanded.id = `todo-card__body-expanded--todo-id-${todoId}`;
  divExpanded.classList.add('todo-card__body-expanded');

  // Project
  const projLabel = document.createElement('div');
  projLabel.classList.add('todo-card__label');
  // projLabel.classList.add("todo-card__project-label");
  projLabel.textContent = 'Project: ';
  const projName = document.createElement('div');
  projName.classList.add('todo-card__project-name');
  projName.textContent = targetProject.name;
  divExpanded.appendChild(projLabel);
  divExpanded.appendChild(projName);

  // Due Date
  let dueDate = '';
  if (targetTodo.get('dueDate')) {
    dueDate = format(targetTodo.get('dueDate'), 'MM-dd-yyyy');
  }
  const dueDateLabel = document.createElement('div');
  dueDateLabel.classList.add('todo-card__label');
  dueDateLabel.textContent = 'Due date: ';
  const dueDateDate = document.createElement('div');
  dueDateDate.classList.add('todo-card__due-date-date');
  dueDateDate.textContent = dueDate;
  divExpanded.appendChild(dueDateLabel);
  divExpanded.appendChild(dueDateDate);

  // Description
  const descLabel = document.createElement('div');
  descLabel.classList.add('todo-card__label');
  descLabel.textContent = 'Description: ';
  const descBody = document.createElement('div');
  descBody.classList.add('todo-card__description-body');
  descBody.textContent = targetTodo.get('description');
  divExpanded.appendChild(descLabel);
  divExpanded.appendChild(descBody);

  // Priority
  const priorityLabel = document.createElement('div');
  priorityLabel.classList.add('todo-card__label');
  priorityLabel.textContent = 'Priority: ';
  const priorityBody = document.createElement('div');
  priorityBody.classList.add('todo-card__priority-body');
  priorityBody.textContent = targetTodo.get('priority');
  divExpanded.appendChild(priorityLabel);
  divExpanded.appendChild(priorityBody);

  // Notes div
  // TODO: Extract "notes" code below to function
  const notesLabel = document.createElement('div');
  notesLabel.classList.add('todo-card__label', 'todo-card__label-notes');
  notesLabel.textContent = 'Notes:';
  const notesBody = document.createElement('div');
  notesBody.classList.add('todo-card__notes-body');
  const buttonNewNote = document.createElement('button');
  notesBody.appendChild(buttonNewNote);
  buttonNewNote.classList.add('todo-card__button-new-note');
  buttonNewNote.textContent = '+';
  buttonNewNote.addEventListener('click', () => {
    if (buttonNewNote.textContent === '+') {
      buttonNewNote.textContent = '✔';
      const inputNewNote = document.createElement('input');
      inputNewNote.type = 'input';
      inputNewNote.classList.add('todo-card__input-note');
      notesBody.prepend(inputNewNote);
      inputNewNote.focus();
    } else if (buttonNewNote.textContent === '✔') {
      const children = notesBody.childNodes;
      const inputNewNote = children[0];
      const replacementNewNote = document.createElement('div');
      replacementNewNote.value = 'foo';
      replacementNewNote.textContent = inputNewNote.value;
      replacementNewNote.classList.add('todo-card__note');
      notesBody.replaceChild(replacementNewNote, inputNewNote);
      buttonNewNote.textContent = '+';
    }
  });

  divExpanded.appendChild(notesLabel);
  divExpanded.appendChild(notesBody);

  // Checklist items div
  // const divChecklistItems = document.createElement("div");
  // divChecklistItems.classList.add("todo-card__checklist-items");
  // divChecklistItems.textContent = "Checklist items go here";
  // divExpanded.appendChild(divChecklistItems);

  const divExtraTodoButtons = createDivExtraButtons(todoId);
  divExpanded.appendChild(divExtraTodoButtons);
  return divExpanded;
};

const createTodoBody = function (todoId) {
  const divTodoBody = document.createElement('div');
  divTodoBody.id = `todo-card__body-container--todo-id-${todoId}`;
  divTodoBody.classList.add('todo-card__body-container');
  const divTodoBodySimple = createTodoBodySimple(todoId);
  const divTodoBodyExpanded = createTodoBodyExpanded(todoId);
  divTodoBody.appendChild(divTodoBodySimple);
  divTodoBody.appendChild(divTodoBodyExpanded);
  return divTodoBody;
};

// Modals

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

const dropdown = document.querySelector('.form__projects-select');

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

// TODO: Delete me

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

const createDivExtraButtons = function (todoId) {
  const divTodoButtons = document.createElement('div');
  divTodoButtons.classList.add('todo-card__extra-buttons');
  const button1 = document.createElement('button');
  button1.classList.add('todo-card__extra-button', 'todo-card__extra-button--edit');
  button1.textContent = '🖉 Edit';

  button1.addEventListener('click', function () {
    publisher.publish('open modal', todoId);
  });

  const button2 = document.createElement('button');
  button2.classList.add('todo-card__extra-button', 'todo-card__extra-button--delete');
  button2.textContent = '🗑 Delete';
  button2.addEventListener('click', function () {
    publisher.publish('delete todo', todoId);
  });

  divTodoButtons.appendChild(button1);
  divTodoButtons.appendChild(button2);
  return divTodoButtons;
};

export const updateMainViewTitle = function () {
  const { lastViewConstraint, lastViewValue } = localData.config;
  const mainViewType = document.querySelector('.main__view-title-label');
  const mainViewValue = document.querySelector('.main__view-title-value');
  mainViewValue.textContent = lastViewValue;

  if (lastViewConstraint === 'timeframe') {
    mainViewType.textContent = 'View: ';
    mainViewValue.classList.add('main__view-title-by-timeframe');
    mainViewValue.classList.remove('main__view-title-by-project');
  } else if (lastViewConstraint === 'project') {
    mainViewType.textContent = 'View by Project: ';
    mainViewValue.classList.add('main__view-title-by-project');
    mainViewValue.classList.remove('main__view-title-by-timeframe');
  }

  updateViewIcon();
};

const updateViewIcon = updateViewIconDelegated;

// Populate elements

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

export const refreshUI = function () {
  populateMainTodos();
  updateMainViewTitle();
  updateDropdown();
  populateNavTimeframes();
  populateNavProjects();
};
