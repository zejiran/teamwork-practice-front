import { Component, Input, OnInit } from '@angular/core';
import { PostDetail } from './postDetail';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  @Input() postDetail: PostDetail;

  constructor() { }

  ngOnInit() {
    console.log(this.postDetail.id);
  }
}
