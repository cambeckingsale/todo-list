import { format } from 'date-fns';
import DOMcontroller from './DOMcontroller';
import Task from './task';
import Project from './project';

const storedDataString = JSON.stringify({
  tasks: [
    {
      title: 'tzero',
      description: 'tzero-description',
      dueDate: format(new Date(2021, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
      dateAdded: format(new Date(2021, 2, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
      uuid: '234234',
    },
    {
      title: 'tone',
      description: 'tone-description',
    },
  ],
  projects: [
    {
      title: 'pzero',
      tasks: ['tzero', 'tone'],
    },
    {
      title: 'pone',
    },
  ],
});

// -------------------------------- ON LOAD -------------------------

const loadTasks = (storedTasks) => {
  const tasks = [];
  storedTasks.forEach((task) => {
    const newTask = new Task(
      task.title,
      task.description,
      task.dueDate,
      task.dateAdded,
      task.dateLastEdited,
      task.uuid
    );
    tasks.push(newTask);
  });
  return tasks;
};

const loadProjects = (storedProjects, tasks) => {
  const projects = [];
  storedProjects.forEach((project) => {
    const newProject = new Project(
      project.title,
      project.dateAdded,
      project.dateLastEdited
    );
    if (typeof project.tasks !== 'undefined') {
      project.tasks.forEach((taskTitle) => {
        console.log();
        newProject.addTask(tasks.find((task) => task.title === taskTitle));
      });
    }
    projects.push(newProject);
  });
  return projects;
};

const onLoad = () => {
  // get from storage
  const storedData = JSON.parse(storedDataString);
  // load tasks and projects
  const tasks = loadTasks(storedData.tasks);
  const projects = loadProjects(storedData.projects, tasks);

  console.log(tasks);
  console.log(projects);
  // load page on dom
  DOMcontroller.renderHomePage(projects);
};

//---------------------------------------------------------

export default { onLoad };
