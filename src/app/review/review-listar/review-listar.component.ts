import {Component, Input, OnInit} from '@angular/core';
import { ReviewService } from '../review.service';
import {ReviewDetail} from '../reviewDetail';
import {Review} from '../review';

@Component({
  selector: 'app-review-listar',
  templateUrl: './review-listar.component.html',
  styleUrls: ['./review-listar.component.css']
})
export class ReviewListarComponent implements OnInit {
  @Input() reviews: Array<Review>;
  selected = false;
  selectedReview: ReviewDetail;
  selectedComment: number;

  constructor(private reviewService: ReviewService) {
  }

  getReviews(): void {
  }

  ngOnInit(): void {
    this.getReviews();
  }

  onSelected(review: ReviewDetail): void{
    if (this.selected){
      this.selectedReview.comment.id = 0;
      this.selected = false;
    } else{
      this.reviewService.getReview(review.id)
        .subscribe(reviewDetail => {
          this.selectedReview = reviewDetail;
        });
      this.selectedComment = review.comment.id;
      this.selected = true;
    }
  }

}
