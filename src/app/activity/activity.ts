export class Activity{

	name: string;

	description: string;


	minutes: number;

  constructor(name: string, description: string, time: any, minutes: number){
    this.name = name;
    this.description = description;
    this.minutes = minutes;
  }
}
