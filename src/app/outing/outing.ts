//import { Itinerary } from "../itinerary/itinerary";
export class Outing {
  name:string;
  date:any;
  place: string;
  participationCost:number;
  //itinerary:Itinerary;


  constructor(name:string,
    date:any,
    place:string,
    participationCost:number/*,
    itinerary:Itinerary
    */){
      this.name = name;
      this.date = date;
      this.place = place;
      this.participationCost = participationCost;
      /*
      this.itinerary = itinerary;
      */
    }

}
