import { format } from 'date-fns';
import uuidv4 from './uuid';

export default class Task {
  constructor(
    title,
    description = 'No description',
    dueDate = 'No due date',
    dateAdded = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
    dateLastEdited = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
    uuid = uuidv4()
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.dateAdded = dateAdded;
    this.dateLastEdited = dateLastEdited;
    this.uuid = uuid;
  }

  setTitle(title) {
    this.title = title;
    this.dateLastEdited = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  }

  setDescription(description) {
    this.description = description;
    this.dateLastEdited = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
    this.dateLastEdited = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  }
}
