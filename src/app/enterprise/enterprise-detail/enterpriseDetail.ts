import { Calendar } from '../../calendar/calendar';
import { Person } from '../../person/person';
import {Enterprise} from '../enterprise';

export class EnterpriseDetail extends Enterprise{
  password: string;
  mail: string;
  constructor(
    id: number,
    representative: Person,
    user: string,
    calendar: Calendar,
    password: string,
    mail: string,
  ) {
    super(id, representative, user, calendar);
    this.password = password;
    this.mail = mail;
  }
}
