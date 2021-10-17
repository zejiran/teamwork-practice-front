export class Transaction {
  payment: PaymentType;
  value: number
  date: Date


  constructor(
    payment: PaymentType,
    value: number,
    date: Date
    ) {
    this.payment = payment
    this.value = value
    this.date = date
  }

}

enum PaymentType {
  "CREDITCARD", "DEBITCARD"
}

