import { Route } from '../route/route';
// import { Itinerary } from "../itinerary/itinerary";
export class Outing {
  id: number;
  name: string;
  date: any;
  place: string;
  participationCost: number;
  // itinerary:Itinerary;


  constructor(id: number,
              name: string,
              date: any,
              place: string,
              participationCost: number/*,
    itinerary:Itinerary
    */) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.place = place;
    this.participationCost = participationCost;
    /*
    this.itinerary = itinerary;
    */
  }

}
