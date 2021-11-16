export class Comment {
  id: number;
  text: string;
  likes: number;
  dislikes: number;

  constructor(
    id?: number,
    text?: string,
    likes?: number,
    dislikes?: number,
  ) {
    this.id = id;
    this.text = text;
    this.likes = likes;
    this.dislikes = dislikes;
  }
}
