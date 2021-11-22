import {Component, Input, OnInit} from '@angular/core';
import {ReviewDetail} from '../reviewDetail';
import {FilesContainer} from '../../FilesContainer/filesContainer';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  @Input() reviewDetail: ReviewDetail;

  constructor() { }

  ngOnInit(): void {
    this.reviewDetail = new ReviewDetail(new FilesContainer());
  }

}
