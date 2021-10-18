export class Comment {
  text: string;
  likes: number;
  dislikes: number;

  constructor(
    text: string,
    likes: number,
    dislikes: number,
  ) {
    this.text = text;
    this.likes = likes;
    this.dislikes = dislikes;
  }
}
