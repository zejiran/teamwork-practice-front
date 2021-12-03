import { Post } from './../post';
import { Comment } from 'src/app/comment/comment';

export class PostDetail extends Post {
  title: string;
  comment: Comment;

  constructor(
    id: number,
    ratings: number,
    title: string,
    comment: Comment,
  ) {
    super(id, ratings);
    this.title = title;
    this.comment = comment;
  }
}
