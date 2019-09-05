export enum Role {
  STUDENT, TEACHER
}

export class User {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;

  constructor(uid: string, firstName: string, lastName: string, email: string, role: Role) {
    this.uid = uid;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
  }
}
