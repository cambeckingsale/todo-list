export default class Project {
  constructor(title, description = 'No description', dueDate = 'No due date') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.dateAdded = new Date();
    this.dateLastEdited = new Date();

    this.tasks = [];
  }

  setTitle(title) {
    this.title = title;
    this.dateLastEdited = new Date();
  }

  getTitle() {
    return this.title;
  }

  setDescription(description) {
    this.description = description;
    this.dateLastEdited = new Date();
  }

  getDescription() {
    return this.description;
  }

  setdueDate(dueDate) {
    this.dueDate = dueDate;
    this.dateLastEdited = new Date();
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
