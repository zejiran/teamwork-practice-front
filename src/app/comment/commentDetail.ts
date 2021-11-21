import {Comment} from './comment';

export class CommentDetail extends Comment{
  userType: string;
  userId: string;
  replies: Array<Comment>;

  constructor(userType: string,
              userId: string, replies: Array<Comment>) {
    super();
    this.userType = userType;
    this.userId = userId;
    this.replies = replies;
  }
}
