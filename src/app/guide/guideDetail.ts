import { Guide } from './guide';
import { Outing } from '../outing/outing';

export class GuideDetail extends Guide{
  outings: Array<Outing>
}
