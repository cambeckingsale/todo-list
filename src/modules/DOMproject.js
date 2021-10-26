import DOMTasks from './DOMtask';

const renderProjectElement = (project) => {
  const projectElement = document.createElement('div');
  projectElement.classList.add('project-element');
  projectElement.setAttribute('id', project.uuid);
  const projectTitle = document.createElement('div');
  projectTitle.classList.add('project-title');
  projectTitle.innerText = project.title;
  projectElement.appendChild(projectTitle);
  const projectTasks = document.createElement('div');
  projectTasks.classList.add('project-tasks');
  project.tasks.forEach((task) => {
    projectTasks.appendChild(DOMTasks.renderTaskElement(task));
  });
  projectElement.appendChild(projectTasks);
  return projectElement;
};

export default { renderProjectElement };
