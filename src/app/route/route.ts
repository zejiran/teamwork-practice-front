import { Outing } from "../outing/outing";

enum Difficulty {
  EASY, AMATEUR, EXPERIMENTED
}

export class Route {
  difficulty:Difficulty;
  estimatedDuration:number;
  outing:Outing;

  constructor(difficulty: Difficulty, estimatedDuration:number,outing:Outing){

    this.difficulty=difficulty;
    this.estimatedDuration=estimatedDuration;
    this.outing=outing;
  }


}

