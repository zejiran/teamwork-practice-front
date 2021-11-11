import { Calendar } from '../calendar/calendar';
import { Client } from '../client/client';
import { Person } from '../person/person';

export class Enterprise extends Client{
  representative: Person;

  constructor(
    idNumber: number,
    user: string,
    idType: string,
    mail: string,
    representative: Person,
  ) {
    super(idNumber, user, idType, mail);
    this.representative = representative;
  }

}
