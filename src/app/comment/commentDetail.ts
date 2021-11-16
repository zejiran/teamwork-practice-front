import {Comment} from './comment';

export class CommentDetail extends Comment{
  username: string;
  userType: string;
  userId: string;
  date: Date;
  replies: Array<Comment>;

  constructor(id: number, text: string, likes: number, dislikes: number, username: string, userType: string,
              userId: string, date: Date, replies: Array<Comment>) {
    super(id, text, likes, dislikes);
    this.username = username;
    this.userType = userType;
    this.userId = userId;
    this.date = date;
    this.replies = replies;
  }
}
