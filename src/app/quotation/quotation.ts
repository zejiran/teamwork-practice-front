import { Outing } from '../outing/outing';

enum Status {
  REGISTERED,
  SEARCHED,
  PAST
}

export class Quotation {

  participants: number;
  totalCost: number;
  status: Status;
  outing: Outing;

  constructor(participants: number,
              totalCost: number,
              status: Status,
              outing: Outing) {
    this.participants = participants;
    this.totalCost = totalCost;
    this.status = status;
    this.outing = outing;
  }

}
