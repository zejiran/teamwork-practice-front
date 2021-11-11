import { Calendar } from "../calendar/calendar";
import { Client } from "../client/client";

export class Enterprise extends Client{
  representative: string;

  constructor(
    representative: string,
    user: string,
    idNumber: string,
    idType: string,
    address: string,
    calendar: Calendar
  ) {
    super(user, idNumber, idType, calendar);
    this.representative = representative;
  }

}
