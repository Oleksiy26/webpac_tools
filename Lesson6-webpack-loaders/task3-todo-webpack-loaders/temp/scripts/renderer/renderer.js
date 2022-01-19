import "core-js/modules/es.array.sort.js";
import "core-js/modules/web.dom-collections.iterator.js";
import { getItem } from '../storage.js';
const listElem = document.querySelector('.list');

const compareTasks = (a, b) => {
  if (a.done - b.done) {
    return a.done - b.done;
  }

  if (a.done) {
    return new Date(b.finishDate) - new Date(a.finishDate);
  }

  return new Date(b.crateDate) - new Date(a.crateDate);
};

const createCheckbox = _ref => {
  let {
    done,
    id
  } = _ref;
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list-item__checkbox');
  return checkboxElem;
};

const createListItem = _ref2 => {
  let {
    text,
    done,
    id
  } = _ref2;
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item');
  const checkboxElem = createCheckbox({
    done,
    id
  });

  if (done) {
    listItemElem.classList.add('list-item_done');
  }

  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;
  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};

export const renderTasks = () => {
  const taskList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = taskList.sort(compareTasks).map(createListItem);
  listElem.append(...tasksElems);
};