export class Comment {
  id: number;
  text: string;
  likes: number;
  dislikes: number;
  username: string;
  date: Date;

  constructor(
    id?: number,
    text?: string,
    likes?: number,
    dislikes?: number,
    username?: string,
    date?: Date
  ) {
    this.id = id;
    this.text = text;
    this.likes = likes;
    this.dislikes = dislikes;
    this.username = username;
    this.date = date;
  }
}
