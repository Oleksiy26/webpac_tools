import { initToDoListHendlers } from './list/todoList';
import { renderTasks } from './list/renderer/renderer';
import { getTasksList } from './list/tasksGeteway';
import { setItem } from './list/storage';
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
