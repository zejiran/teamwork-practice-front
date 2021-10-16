//import { Itinerary } from "../itinerary/itinerary";
//import { Activity } from "../activity/activity";
//import { Guide } from "../guide/guide";
//import { ComplementaryInformation } from "../complementaryInformation/complementaryInformation";
//import { Review } from "../review/review";
//import { Route } from "../route/route"
export class Outing {
  name:string;
  date:any;
  place: string;
  participationCost:number;
  //itinerary:Itinerary;
  //activities: Array<Activity>;
  //guides: Array<Guide>;
  //complementaryInformation: ComplementaryInformation;
  //review: Review;
  //routes: Array<Route>;

  constructor(name:string,
    date:any,
    place:string,
    participationCost:number/*,
    itinerary:Itinerary,
    activities: Array<Activity>,
    guides: Array<Guide>,
    complementaryInformation: ComplementaryInformation,
    review: Review,
    routes: Array<Route>*/){
      this.name = name;
      this.date = date;
      this.place = place;
      this.participationCost = participationCost;
      /*
      this.itinerary = itinerary;
      this.activities = acitivites;
      this.guides = guides;
      this.complementaryInformation = complementaryInformation;
      this.review = review;
      this.routes = routes;
      */
    }

}
