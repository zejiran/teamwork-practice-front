import { Multimedia } from '../multimedia/multimedia';
import { Outing } from '../outing/outing';
import { Route } from '../route/route';

export class ComplementaryInformation {
  id: number;
  description: string;
  recomendation: string;
  homeImage: Multimedia;
  outing: Outing;

  constructor(id: number, description: string, recomendation: string, homeImage: Multimedia, outing: Outing){
    this.id = id;
    this.description = description;
    this.recomendation = recomendation;
    this.homeImage = homeImage;
    this.outing = outing;
  }

}
