import { renderTasks } from './renderer/renderer';
import { deleteTask, getTasksList } from './tasksGeteway';
import { setItem } from './storage';

export const onDelateTask = (e) => {
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');
  if (!isDeleteBtn) {
    return;
  }

  const elem = e.target.parentNode.firstChild;
  const taskId = elem.dataset.id;
  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
