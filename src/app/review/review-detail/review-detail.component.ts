import {Component, Input, OnInit} from '@angular/core';
import {ReviewDetail} from '../reviewDetail';
import {FilesContainer} from '../../FilesContainer/filesContainer';
import {Comment} from '../../comment/comment';
import {Route} from '../../route/route';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  @Input() reviewDetail: ReviewDetail;
  constructor() { }

  ngOnInit(): void {
    if ( this.reviewDetail === null || this.reviewDetail === undefined ){
      this.reviewDetail = new ReviewDetail(0, new Comment(0, '', 0, 0, '', new Date()), 0, new Route(0, '', 0, 0),
        new FilesContainer());
    }
  }

}
