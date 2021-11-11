import { Outing } from '../outing/outing';

enum Status {
  REGISTERED,
  SEARCHED,
  PAST
}

export class Quotation {
  id: number;
  participants: number;
  totalCost: number;
  status: Status;
  outing: Outing;

  constructor(id:number,
              participants: number,
              totalCost: number,
              status: Status,
              outing: Outing) {
    this.id=id;
    this.participants = participants;
    this.totalCost = totalCost;
    this.status = status;
    this.outing = outing;
  }

}
