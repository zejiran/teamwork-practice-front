import { Route } from '../route/route'

export class Locationn {
  idLocation:number;
  locationName:string;
  latitude:number;
  longitude:number;
  map:Route;

  constructor(idLocation:number, locationName:string, latitude:number, longitude: number, route:Route){
    this.idLocation=idLocation;
    this.locationName=locationName;
    this.latitude=latitude;
    this.longitude=longitude;
    this.map=route;
  }

}
