export class Post {
  id: number;
  ratings: number;

  constructor(
    id: number,
    ratings: number,
  ) {
    this.ratings = ratings;
    this.id = id;
  }

}
