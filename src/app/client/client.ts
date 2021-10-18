import { Calendar } from "../calendar/calendar";
export class Client {
  calendar:Calendar;
  constructor(calendar:Calendar) {
    this.calendar = calendar;
  }
}
