import {Review} from './review';
import {FilesContainer} from '../FilesContainer/filesContainer';

export class ReviewDetail extends Review{
  container: FilesContainer;
  constructor(container?: FilesContainer) {
    super();
    this.container = container;
  }

  toString(): string {
    return String(this.comment.id);
  }
}
