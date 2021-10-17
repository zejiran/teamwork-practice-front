export class User {
  name: string;
  idNumber: string;
  idType: string;
  address: string;

  constructor(
    name: string,
    idNumber: string,
    idType: string,
    address: string
  ) {
    this.name = name;
    this.idNumber = idNumber;
    this.idType = idType;
    this.address = address;
  }
}
