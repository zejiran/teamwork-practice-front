export class User {
  id: number;
  user: string;
  password: string;
  mail: string;

  constructor(
    id: number,
    user: string,
    password: string,
    mail: string
  ) {
    this.id = id;
    this.user = user;
    this.password = password;
    this.mail = mail;
  }
}
