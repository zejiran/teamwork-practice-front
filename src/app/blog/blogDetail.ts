import {Blog} from './blog';
import {Post} from '../post/post';

export class BlogDetail extends Blog {
  userId: number;
  userType: string;
  posts: Array<Post>;
  constructor(userId?: number, userType?: string , posts?: Array<Post>) {
    super();
    this.userId = userId;
    this.userType = userType;
    this.posts = posts;
  }
}
