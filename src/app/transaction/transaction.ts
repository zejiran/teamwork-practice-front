export class Transaction {
  id: number;
  payment: PaymentType;
  value: number;
  creationDate: string;
  username: string;



  constructor(
    id: number,
    payment: PaymentType,
    value: number,
    creationDate: string,
    username: string


  ) {
    this.id = id;
    this.payment = payment;
    this.value = value;
    this.creationDate = creationDate;
    this.username = username;
  }

}

enum PaymentType {
  'CREDITCARD', 'DEBITCARD'
}

