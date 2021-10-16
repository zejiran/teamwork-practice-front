export class Insurance {
  name:string;
  conditions:string;
  features:string;
  price:number

  constructor(name:string,
    conditions:string,
    features:string,
    price:number){
      this.name = name;
      this.conditions = conditions;
      this.features = features;
      this.price = price;

    }

}
