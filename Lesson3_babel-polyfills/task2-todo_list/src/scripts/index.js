import { initToDoListHendlers } from './todoList.js';
import { renderTasks } from './renderer/renderer.js';
import { getTasksList } from './tasksGeteway.js';
import { setItem } from './storage.js';

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
