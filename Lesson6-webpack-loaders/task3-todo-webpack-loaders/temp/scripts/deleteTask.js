import { renderTasks } from './renderer/renderer.js';
import { deleteTask, getTasksList } from './tasksGeteway.js';
import { setItem } from './storage.js';
export const onDelateTask = e => {
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');

  if (!isDeleteBtn) {
    return;
  }

  const elem = e.target.parentNode.firstChild;
  const taskId = elem.dataset.id;
  deleteTask(taskId).then(() => getTasksList()).then(newTasksList => {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
};