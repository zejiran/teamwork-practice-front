import { User } from './../user';

export class UserDetail extends User {
  password: string;
  mail: string;

  constructor(
    id: number,
    user: string,
    password: string,
    mail: string
  ) {
    super(id, user);
    this.password = password;
    this.mail = mail;
  }
}
