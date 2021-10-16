//import { Insurance } from "../insurance/insurance";
import { Outing } from "../outing/outing";

enum Status{
  REGISTERED,
  SEARCHED,
  PAST
}

export class Quotation {

  participants:number;
  totalCost:number;
  status:Status;
  //insurance:Insurance;
  outing:Outing;

  constructor(participants:number,
    totalCost:number,
    status:Status,
    //insurance:Insurance,
    outing:Outing){
      this.participants = participants;
      this.totalCost = totalCost;
      this.status = status;
      //this.insurance = insurance;
      this.outing = outing;
    }

}
