export class Transaction {
  id: number;
  payment: PaymentType;
  value: number;
  creationDate: Date;


  constructor(
    id: number,
    payment: PaymentType,
    value: number,
    creationDate: Date
  ) {
    this.id = id;
    this.payment = payment;
    this.value = value;
    this.creationDate = creationDate;
  }

}

enum PaymentType {
  'CREDITCARD', 'DEBITCARD'
}

