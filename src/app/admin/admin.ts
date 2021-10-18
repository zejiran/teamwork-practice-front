import {User} from '../user/user';

export class Admin extends User{
  constructor( user: string,
               password: string,
               mail: string) {
    super(user, password, mail);
    }
}
