const renderTaskElement = (task) => {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task-element');
  taskElement.setAttribute('id', task.uuid);
  const taskTitle = document.createElement('div');
  taskTitle.classList.add('task-title');
  taskTitle.innerText = task.title;
  taskElement.appendChild(taskTitle);
  return taskElement;
};

export default { renderTaskElement };
