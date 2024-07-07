import './global.css';
import './style.css';
import {
  updateViewIconDelegated,
  populateMainTodos,
  openModal,
  updateDropdown,
  saveTodo,
  closeModal,
  populateNavTimeframes,
  populateNavProjects,
  changeView,
  navOpen,
  navClose,
  checkboxClicked,
} from './modules/ui';
import {
  localData,
  saveLocalData,
  loadLocalData,
  hasStorage,
  createProject,
  findProject,
  findTodo,
  deleteTodo,
  filterTodos,
  sortProjectTodosByDateAsc,
} from './modules/storage';

import createBroker from './modules/createBroker';
import createPublisher from './modules/createPublisher';
export const broker = createBroker();
export const publisher = createPublisher(broker);
import { format } from 'date-fns';

// Import images
// import All from './assets/all.svg';
// import Calendar from './assets/calendar.svg';
// import Star from './assets/star.svg';
// import Project from './assets/project.svg';
import LeftArrow from './assets/left-arrow.svg';

// const createTodoCardNotes = function () {
//   const divNotes = document.createElement('div');
//   divNotes.classList.add('todo-card__notes');

//   const divNotesTitle = document.createElement('h3');
//   divNotesTitle.textContent = 'Notes:';
//   divNotes.appendChild(divNotesTitle);

//   // const buttonNewNote = document.createElement("button");
//   // buttonNewNote.textContent = "+ note";
//   // buttonNewNote.addEventListener("click", () => {
//   // const inputNewNote = document.createElement("input");
//   // inputNewNote.type = "text";
//   // divNotes.appendChild(inputNewNote);
//   // inputNewNote.focus();
//   // });
//   // divNotes.appendChild(buttonNewNote);

//   return divNotes;
// };

// NOTE: DELETE ME
// const updateViewIcon = function () {
//   const { lastViewValue } = localData.config;
//   const viewTitleIcon = document.querySelector('.main__view-title-icon');
//   viewTitleIcon.textContent = '';

//   let icon;

//   switch (lastViewValue) {
//     case 'all':
//       icon = new Image();
//       icon.src = All;
//       icon.alt = '';
//       break;
//     case 'today':
//       icon = new Image();
//       icon.src = Star;
//       icon.alt = '';
//       break;
//     case 'upcoming':
//       icon = new Image();
//       icon.src = Calendar;
//       icon.alt = '';
//       break;
//     default:
//       icon = new Image();
//       icon.src = Project;
//       icon.alt = '';
//   }

//   viewTitleIcon.appendChild(icon);
// };

const initializeNewData = function () {
  createProject('default');
};

const firstLoad = function () {
  if (!hasStorage('localStorage')) alert('Warning: Unable to save locally.');
  loadLocalData(localData);
  if (localData.config.projectCounter === 0) initializeNewData();
};

// Subscribe to events
broker.subscribe('start up', firstLoad);
broker.subscribe('start up', saveLocalData);
broker.subscribe('open modal', openModal);
broker.subscribe('open modal', navClose);
broker.subscribe('nav open', navOpen);
broker.subscribe('nav open', closeModal);
broker.subscribe('save todo', saveTodo);
broker.subscribe('save todo', closeModal);
broker.subscribe('save todo', sortProjectTodosByDateAsc);
broker.subscribe('save todo', saveLocalData);
broker.subscribe('delete todo', deleteTodo);
broker.subscribe('delete todo', saveLocalData);
broker.subscribe('change view', changeView);
broker.subscribe('change view', navClose);
broker.subscribe('change view', saveLocalData);
broker.subscribe('checkbox clicked', checkboxClicked);
broker.subscribe('checkbox clicked', saveLocalData);

// Publish events
document
  .querySelector('.button-save-todo')
  .addEventListener('click', () => publisher.publish('save todo'));

document
  .querySelector('.button-nav-open')
  .addEventListener('click', () => publisher.publish('nav open'));

document.querySelector('.button-new-todo').addEventListener('click', function () {
  publisher.publish('open modal');
});
// Publish event for first load
publisher.publish('start up');
