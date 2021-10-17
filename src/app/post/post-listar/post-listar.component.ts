import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-listar',
  templateUrl: './post-listar.component.html',
  styleUrls: ['./post-listar.component.css']
})
export class PostListarComponent implements OnInit {
  posts: Array<Post>;

  constructor(private postService: PostService) {
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
