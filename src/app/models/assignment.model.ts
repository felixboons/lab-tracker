export class Assignment {
  uid: string;
  title: string;
  deadline: Date;
  // TODO: Anything else?

  constructor(input) {
    this.title = input.title;
    this.deadline = input.deadline;
  }
}
