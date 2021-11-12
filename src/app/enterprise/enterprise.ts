import { Calendar } from '../calendar/calendar';
import { Client } from '../client/client';
import { Person } from '../person/person';

export class Enterprise {
  representative: Person;

  constructor(
    representative: Person,
  ) {
    this.representative = representative;
  }

}
