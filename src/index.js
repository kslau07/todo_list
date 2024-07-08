import './global.css';
import './style.css';
import {
  openModal,
  saveTodo,
  closeModal,
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
  deleteTodo,
  sortProjectTodosByDateAsc,
} from './modules/storage';
import createBroker from './modules/createBroker';
import createPublisher from './modules/createPublisher';

export const broker = createBroker();
export const publisher = createPublisher(broker);
export { format } from 'date-fns';

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

document.querySelector('.button-new-todo').addEventListener('click', () => {
  publisher.publish('open modal');
});

// Publish initial page load
publisher.publish('start up');
