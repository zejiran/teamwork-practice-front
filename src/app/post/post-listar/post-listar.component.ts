import {Component, Input, OnInit} from '@angular/core';
import { Comment } from 'src/app/comment/comment';
import { Post } from '../post';
import { PostDetail } from '../post-detail/postDetail';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-listar',
  templateUrl: './post-listar.component.html',
  styleUrls: ['./post-listar.component.css']
})
export class PostListarComponent implements OnInit {
   @Input() posts: Array<Post>;
  selectedPost: PostDetail = new PostDetail(0, 0, '', new Comment(0, '', 0, 0));
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
