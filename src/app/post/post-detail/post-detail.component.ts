import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/comment/comment';
import { PostDetail } from './postDetail';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  @Input() postDetail: PostDetail;

  constructor() { }

  ngOnInit(): void {
    this.postDetail = new PostDetail(0, 0, '', new Comment('', 0, 0));
  }
}
