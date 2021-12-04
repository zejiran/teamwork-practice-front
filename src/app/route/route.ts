enum Difficulty {
  EASY, AMATEUR, EXPERIMENTED
}

export class Route {
  id: number;
  routeName: string;
  difficulty: Difficulty;
  estimatedDuration: number;

  constructor(id: number, routeName: string, difficulty: Difficulty, estimatedDuration: number) {
    this.id = id;
    this.routeName = routeName;
    this.difficulty = difficulty;
    this.estimatedDuration = estimatedDuration;
  }


}

