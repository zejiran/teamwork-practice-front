import {Admin} from './admin';
import {Outing} from '../outing/outing';

export class AdminDetail extends Admin{

  password: string;
  outings: Array<Outing>;

  constructor(password?: string, outings?: Array<Outing>) {
    super();
    this.password = password;
    this.outings = outings;
  }
}
