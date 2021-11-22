export class TransactionDetail {
  userID: number;
  userType: string;

  constructor(userID?: number, userType?: string) {
    this.userID = userID;
    this.userType = userType;
  }
}
