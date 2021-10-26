import { format } from 'date-fns';

export default class Project {
  constructor(
    title,
    description = null,
    dueDate = 'No due date',
    dateAdded = new Date(),
    dateLastEdited = new Date()
  ) {
    this.title = title;
    this.description = description;
    this.dueDate =
      typeof dueDate === 'string'
        ? dueDate
        : format(dueDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    this.dateAdded =
      typeof dateAdded === 'string'
        ? dateAdded
        : format(dateAdded, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    this.dateLastEdited =
      typeof dateLastEdited === 'string'
        ? dateLastEdited
        : format(dateLastEdited, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    this.tasks = [];
  }

  setTitle(title) {
    this.title = title;
    this.dateLastEdited = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  }

  getTitle() {
    return this.title;
  }

  setDescription(description) {
    this.description = description;
    this.dateLastEdited = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  }

  getDescription() {
    return this.description;
  }

  setdueDate(dueDate) {
    this.dueDate = dueDate;
    this.dateLastEdited = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  }

  getDueDate() {
    return this.dueDate;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTaskByTitle(taskTitle) {
    this.tasks.find((task) => task.title === taskTitle);
  }

  removeTaskByTitle(taskTitle) {
    this.tasks.splice(this.tasks.findIndex((task) => task.title === taskTitle));
  }
}
