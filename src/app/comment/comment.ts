export class Comment {
  id: string;
  text: string;
  likes: number;
  dislikes: number;

  constructor(
    id?: number,
    text?: string,
    likes?: number,
    dislikes?: number,
  ) {
    this.text = text;
    this.likes = likes;
    this.dislikes = dislikes;
  }
}
