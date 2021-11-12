import { Insurance } from '../insurance/insurance';
import { Quotation } from './quotation';
export class QuotationDetail extends Quotation{
  insurance: Insurance;
}
