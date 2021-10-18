import { Client } from "../client/client";

export class Enterprise extends Client{
  representative: string;

  constructor(
    representative: string,
    user: string,
    idNumber: string,
    idType: string,
    address: string
  ) {
    super(user, idNumber, idType, address);
    this.representative = representative;
  }

}
