import { Route } from '../route/route';
import { Post } from '../post/post';
// import { ComplementaryInformation } from '../complementaryInformation/complementaryInformation';

enum FileType {
  VIDEO, IMAGE, AUDIO
}

export class Multimedia {
  fileName: string;
  mediaType: FileType;
  extension: string;
  route: Route;
  post: Post;
  // complementaryInformation: complementaryInformation;

  constructor(
    filename: string,
    mediaType: FileType,
    extension: string,
    route: Route,
    post: Post
  ) {
    this.fileName = filename;
    this.mediaType = mediaType;
    this.extension = extension;
    this.route = route;
    this.post = post;
  }
}
