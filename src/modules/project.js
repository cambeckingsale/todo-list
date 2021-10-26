import { format } from 'date-fns';
import uuidv4 from './uuid';

export default class Project {
  constructor(
    title,
    dateAdded = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
    dateLastEdited = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
    uuid = uuidv4()
  ) {
    this.title = title;
    this.dateAdded = dateAdded;
    this.dateLastEdited = dateLastEdited;
    this.uuid = uuid;
    this.tasks = [];
  }

  setTitle(title) {
    this.title = title;
    this.dateLastEdited = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  }

  addTask(task) {
    this.tasks.push(task);
    this.dateLastEdited = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  }

  getTaskByTitle(taskTitle) {
    this.tasks.find((task) => task.title === taskTitle);
  }

  removeTaskByTitle(taskTitle) {
    this.tasks.splice(this.tasks.findIndex((task) => task.title === taskTitle));
    this.dateLastEdited = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  }
}
