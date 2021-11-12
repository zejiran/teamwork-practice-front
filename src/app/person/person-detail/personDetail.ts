import { Person } from './../person';

export class PersonDetail extends Person{
  id: number;
  name: string;
  idNumber: string;
  idType: string;
  address: string;

  constructor(
    id: number,
    name: string,
    idNumber: string,
    idType: string,
    address: string
  ) {
    super(id, name);
    this.idNumber = idNumber;
    this.idType = idType;
    this.address = address;
  }
}
