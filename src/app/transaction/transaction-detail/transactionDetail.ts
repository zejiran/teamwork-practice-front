import { Transaction } from "../transaction";


export class TransactionDetail extends Transaction {
  userType: string;
  userID: string;

  constructor(
    id: number,
    payment: PaymentType,
    value: number,
    creationDate: string,
    username: string,
    userType: string,
    userID: string
  ) {
    super(id, payment, value, creationDate, username  );
    this.userType = userType;
    this.userID = userID;
  }
}

enum PaymentType {
  'CREDITCARD', 'DEBITCARD'
}
