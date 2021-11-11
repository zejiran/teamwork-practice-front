import { Multimedia } from '../multimedia/multimedia';
import { Outing } from '../outing/outing';
import { Route } from '../route/route'

export class ComplementaryInformation {
  id:number;
  description:string;
  recommendation:string;
  homeImage:Multimedia;
  outing:Outing;

  constructor(id:number, description:string, recommendation: string, homeImage:Multimedia, outing:Outing){
    this.id=id;
    this.description=description;
    this.recommendation=recommendation;
    this.homeImage=homeImage;
    this.outing=outing;
  }

}
