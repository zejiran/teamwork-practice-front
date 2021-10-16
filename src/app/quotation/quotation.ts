import { Insurance } from "../insurance/insurance";
import { Outing } from "../outing/outing";
export class Quotation {
  participants:number;
  totalCost:number;
  insurance:Insurance;
  outing:Outing;

  constructor(participants:number,
    totalCost:number,
    insurance:Insurance,
    outing:Outing){
      this.participants = participants;
      this.totalCost = totalCost;
      this.insurance = insurance;
      this.outing = outing;
    }

}
