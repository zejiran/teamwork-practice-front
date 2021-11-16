import { Comment } from '../comment/comment';
import { Route } from '../route/route';

export class Review {
  id: number;
  comment: Comment;
  score: number;
  route: Route;

  constructor(id?: number, comment?: Comment, score?: number, route?: Route) {
    this.id = id;
    this.comment = comment;
    this.score = score;
    this.route = route;
  }
}
