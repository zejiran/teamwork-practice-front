import { Calendar } from '../calendar/calendar';
import { Client } from '../client/client';
import { Person } from '../person/person';

export class Enterprise {
  representative: Person;
  user: string;

  constructor(
    representative: Person,
    user: string
  ) {
    this.representative = representative;
    this.user = user;
  }

}
