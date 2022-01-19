import { renderTasks } from './renderer/renderer';
import { setItem } from './storage';
import { createTask, getTasksList } from './tasksGeteway';

export const createNewTaskHendler = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;
  if (text === '') {
    return;
  }
  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    crateDate: new Date().toISOString(),
    id: Math.random().toString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTaskList) => {
      setItem('tasksList', newTaskList);
      renderTasks();
    });
};

// 1. Prepare data
// 2. write data to DB
// 3. Read new data from server
// 4.Save new data to front-end storage
// 5. Update UI based on new data
