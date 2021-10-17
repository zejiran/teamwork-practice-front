export class User {
    user: string;
    password: string;
    mail: string;

  constructor(
    user: string,
    password: string,
    mail: string
  ) {
    this.user = user;
    this.password = password;
    this.mail = mail;
  }
}
