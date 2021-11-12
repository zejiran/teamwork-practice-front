import { Guide } from './../guide';
import { Outing} from '../../outing/outing';
export class GuideDetail extends Guide{
  name: string;
  points: number;
  reviews: number;
  age: number;
  outings: Array<Outing>;
  constructor(name: string, points: number, reviews: number, age: number){
    super(name, points, reviews, age);
}

}
