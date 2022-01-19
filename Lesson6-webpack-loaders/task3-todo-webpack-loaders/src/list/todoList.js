import { createNewTaskHendler } from './createTask.js';
import { onToggleTask } from './updateTask/updateTask.js';
import { onDelateTask } from './deleteTask.js';

export const initToDoListHendlers = () => {
  const createNew = document.querySelector('.create-task-btn');
  createNew.addEventListener('click', createNewTaskHendler);
  const toDolistElem = document.querySelector('.list');
  toDolistElem.addEventListener('click', onToggleTask);
  toDolistElem.addEventListener('click', onDelateTask);
};
