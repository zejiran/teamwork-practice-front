
export class Itinerary{

  id:number;

	lodging: string;

	transportation: string;

  constructor(
    id : number,
	  lodging: string,
	  transportation: string,
  ){
    this.id = id;
    this.lodging = lodging;
    this.transportation = transportation;
  }
}
