import { Person } from "../person/person";

export class Enterprise extends Person{
  representative: string;

  constructor(
    representative: string,
    name: string,
    idNumber: string,
    idType: string,
    address: string
  ) {
    super(name, idNumber, idType, address);
    this.representative = representative;
  }

}
