
export class Admin {
  id: number;
  user: string;
  mail: string;


  constructor(id?: number, user?: string, mail?: string) {
    this.id = id;
    this.user = user;
    this.mail = mail;
  }

}
