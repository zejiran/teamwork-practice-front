import { Calendar } from './calendar';
import { Quotation } from '../quotation/quotation';
export class CalendarDetail extends Calendar{
  history: Array<Quotation>;
}
