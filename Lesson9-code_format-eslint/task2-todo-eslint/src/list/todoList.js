import { createNewTaskHendler } from './createTask';
import { onToggleTask } from './updateTask/updateTask';
import { onDelateTask } from './deleteTask';

export const initToDoListHendlers = () => {
  const createNew = document.querySelector('.create-task-btn');
  createNew.addEventListener('click', createNewTaskHendler);
  const toDolistElem = document.querySelector('.list');
  toDolistElem.addEventListener('click', onToggleTask);
  toDolistElem.addEventListener('click', onDelateTask);
};
