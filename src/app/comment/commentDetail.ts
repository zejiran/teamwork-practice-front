import {Comment} from './comment';

export class CommentDetail extends Comment{
  userType: string;
  userId: string;
  date: Date;
  replies: Array<Comment>;

  constructor(userType: string,
              userId: string, date: Date, replies: Array<Comment>) {
    super();
    this.userType = userType;
    this.userId = userId;
    this.date = date;
    this.replies = replies;
  }
}
