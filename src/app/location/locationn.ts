import { Route } from '../route/route'

export class Locationn {
  idLocation:number;
  latitude:number;
  longitude:number;
  map:Route;

  constructor(idLocation:number, latitude:number, longitude: number, route:Route){
    this.idLocation=idLocation;
    this.latitude=latitude;
    this.longitude=longitude;
    this.map=route;
  }

}
