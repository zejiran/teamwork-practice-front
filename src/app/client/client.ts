import { User } from '../user/user';

import { Calendar } from '../calendar/calendar';
export class Client extends User{
  calendar: Calendar;
  constructor(user: string, password: string, mail: string, calendar: Calendar) {
    super(user, password, mail);
    this.calendar = calendar;
  }
}
