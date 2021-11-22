import {Blog} from './blog';
import {Post} from '../post/post';

export class BlogDetail extends Blog{
  posts: Array<Post>;

  constructor(posts?: Array<Post>) {
    super();
    this.posts = posts;
  }
}
