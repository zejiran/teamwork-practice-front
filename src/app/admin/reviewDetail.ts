import {Admin} from './admin';
import {Outing} from '../outing/outing';
import {Review} from '../review/review';

export class ReviewDetail extends Review{

  password: string;
  outings: Array<Outing>;

  constructor(password?: string, outings?: Array<Outing>) {
    super();
    this.password = password;
    this.outings = outings;
  }
}
