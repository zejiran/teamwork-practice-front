import {Review} from './review';
import {FilesContainer} from '../FilesContainer/filesContainer';
import {Comment} from '../comment/comment';
import {Route} from '../route/route';

export class ReviewDetail extends Review{
  container: FilesContainer;


  constructor(id: number, comment: Comment, score: number, route: Route, container: FilesContainer) {
    super(id, comment, score, route);
    this.container = container;
  }

  toString(): string {
    return String(this.comment.id);
  }
}
