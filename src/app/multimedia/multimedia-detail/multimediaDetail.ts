import { Multimedia } from './../multimedia';

enum FileType {
  VIDEO, IMAGE, AUDIO
}

export class MultimediaDetail extends Multimedia {
  id: number;
  fileName: string;
  mediaType: FileType;
  extension: string;

  constructor(
    id: number,
    filename: string,
    mediaType: FileType,
    extension: string,
  ) {
    super(id, filename);
    this.mediaType = mediaType;
    this.extension = extension;
  }
}
