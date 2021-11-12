import { Person } from './../../person/person';
import { NaturalPerson } from './../naturalPerson';

export class NaturalPersonDetail extends NaturalPerson {
  person: Person;

  constructor(
    id: number,
    person: Person
  ) {
    super(id);
    this.person = person;
  }
}
