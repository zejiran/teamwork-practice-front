import { Route } from '../route/route';

export class Locationn {
  id: number;
  idLocation: number;
  locationName: string;
  latitude: number;
  longitude: number;
  map: Route;

  constructor(id: number, idLocation: number, locationName: string, latitude: number, longitude: number, route: Route){
    this.id = id;
    this.idLocation = idLocation;
    this.locationName = locationName;
    this.latitude = latitude;
    this.longitude = longitude;
    this.map = route;
  }
}
