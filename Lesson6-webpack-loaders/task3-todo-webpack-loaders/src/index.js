import { initToDoListHendlers } from './list/todoList.js';
import { renderTasks } from './list/renderer/renderer.js';
import { getTasksList } from './list/tasksGeteway.js';
import { setItem } from './list/storage.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks();
  });

  initToDoListHendlers();
});

const onStorageChange = (event) => {
  if (event.key === 'taskslist') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);

// 1. Get data from server
// 2. Save Data to Front-end storage
