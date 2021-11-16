import {Comment} from './comment';

export class CommentDetail extends Comment{
  username: string;
  userType: string;
  userId: string;
  date: Date;
  replies: Array<Comment>;

  constructor(username: string, userType: string,
              userId: string, date: Date, replies: Array<Comment>) {
    super();
    this.username = username;
    this.userType = userType;
    this.userId = userId;
    this.date = date;
    this.replies = replies;
  }
}
