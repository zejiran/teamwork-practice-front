import { Comment } from '../comment/comment';
import { Route } from '../route/route';

export class Review {
  comment: Comment;
  score: number;
  route: Route;

  constructor(comment: Comment, score: number, route: Route) {
    this.comment = comment;
    this.score = score;
    this.route = route;
  }
}
