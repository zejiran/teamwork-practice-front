import { Component, OnInit } from '@angular/core';
import { Post } from "../Post";
import { PostService } from '../post.service';



@Component({
  selector: 'app-post-listar',
  templateUrl: './post-listar.component.html',
  styleUrls: ['./post-listar.component.css']
})
export class PostListarComponent implements OnInit {
  constructor(private postService: PostService) { }

  posts: Array<Post>;

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }
  ngOnInit() {
    this.getPosts();
  }
}
