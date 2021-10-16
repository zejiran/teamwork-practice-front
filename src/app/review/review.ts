import {Comment} from '../comment/comment';

export class Review{
  comment: Comment;
  score: number;
  constructor(comment: Comment, score: number) {
    this.comment = comment;
    this.score = score;
  }
}
