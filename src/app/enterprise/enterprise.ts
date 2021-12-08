import { Calendar } from '../calendar/calendar';
import { Person } from '../person/person';

export class Enterprise {
  id: number;
  representative: Person;
  user: string;
  calendar: Calendar;

  constructor(
    id: number,
    representative: Person,
    user: string,
    calendar: Calendar
  ) {
    this.id = id;
    this.representative = representative;
    this.user = user;
    this.calendar = calendar;
  }

}
