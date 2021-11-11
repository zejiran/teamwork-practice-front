import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostDetail } from '../post-detail/postDetail';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-listar',
  templateUrl: './post-listar.component.html',
  styleUrls: ['./post-listar.component.css']
})
export class PostListarComponent implements OnInit {
  posts: Array<Post>;
  selectedPost: PostDetail;
  selected = false;

  constructor(private postService: PostService) {
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  onSelected(post: Post): void {
    this.postService.getPost(post.id)
    .subscribe(postDetail => {
      this.selectedPost = postDetail;
    });
    this.selected = true;
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
