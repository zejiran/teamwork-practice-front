import {Component, Input, OnInit} from '@angular/core';
import {CommentDetail} from '../commentDetail';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {
  selected = false;
  @Input() commentDetail: CommentDetail;
  constructor() {
  }
  ngOnInit(): void {
    this.commentDetail = new CommentDetail(null, null, null, new Date(), []);
  }

}
