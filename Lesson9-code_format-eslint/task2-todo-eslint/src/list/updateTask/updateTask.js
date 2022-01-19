import { renderTasks } from '../renderer/renderer';
import { getItem, setItem } from '../storage';
import { updateTask, getTasksList } from '../tasksGeteway';

export const onToggleTask = (event) => {
  const isCheckbox = event.target.classList.contains('list-item__checkbox');
  if (!isCheckbox) {
    return;
  }
  const tasksList = getItem('tasksList');
  const taskId = event.target.dataset.id;
  const done = event.target.checked;
  const { text, createdData } = tasksList.find((task) => task.id === taskId);

  const updatedTask = {
    text,
    createdData,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };
  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTaskList) => {
      setItem('tasksList', newTaskList);
      renderTasks();
    });
};

// 1. Prepare data
// 2. Update data to DB
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
