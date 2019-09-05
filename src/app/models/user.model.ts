export enum Role {
  STUDENT, TEACHER
}

export class User {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;

  constructor(input) {
    this.uid = input.uid;
    this.firstName = input.firstName;
    this.lastName = input.lastName;
    this.email = input.email;
    this.role = input.role;
  }
}
