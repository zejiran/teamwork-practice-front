export class Transaction {
  id: number;
  payment: PaymentType;
  value: number;
  creationDate: string;


  constructor(
    id: number,
    payment: PaymentType,
    value: number,
    creationDate: string
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

