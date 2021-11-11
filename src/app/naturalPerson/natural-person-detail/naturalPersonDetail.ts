import { Person } from './../../person/person';
import { NaturalPerson } from './../naturalPerson';

export class NaturalPersonDetail extends NaturalPerson {
  person: Person;

  constructor(
    id: number,
    user: string,
    person: Person
  ) {
    super(id, user);
    this.person = person;
  }
}
