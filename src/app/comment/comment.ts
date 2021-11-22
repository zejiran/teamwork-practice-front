export class Comment {
  id: number;
  text: string;
  likes: number;
  dislikes: number;
  username: string;

  constructor(
    id?: number,
    text?: string,
    likes?: number,
    dislikes?: number,
    username?: string
  ) {
    this.id = id;
    this.text = text;
    this.likes = likes;
    this.dislikes = dislikes;
    this.username = username;
  }
}
