import {User} from './user.model';

export class Assignment {
  uid: string;
  title: string;
  deadline: Date;
  finishedStudents: User[];
  // TODO: Anything else?

  constructor(input) {
    this.title = input.title;
    this.deadline = input.deadline;
  }
}
