import { format } from 'date-fns';
import Task from './task';
import Project from './project';

const storedDataString = JSON.stringify({
  tasks: [
    {
      title: 'tzero',
      description: 'tzero-description',
      dueDate: format(new Date(2021, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
    },
    {
      title: 'tone',
      description: 'tone-description',
    },
  ],
  projects: [
    {
      title: 'pzero',
      description: 'pzero-description',
      tasks: ['tzero', 'tone'],
    },
    {
      title: 'pone',
      description: 'pone-description',
    },
  ],
});

// -------------------------------- ON LOAD -------------------------

const loadTasks = (storedTasks) => {
  const tasks = [];
  storedTasks.forEach((task) => {
    const newTask = new Task(task.title, task.description, task.dueDate);
    tasks.push(newTask);
  });
  return tasks;
};

const loadProjects = (storedProjects, tasks) => {
  const projects = [];
  storedProjects.forEach((project) => {
    const newProject = new Project(
      project.title,
      project.description,
      project.dueData
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
};

export default { onLoad };
