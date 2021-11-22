import { Component, OnInit } from '@angular/core';
import { Review } from '../review';
import { ReviewService } from '../review.service';
import {ReviewDetail} from '../reviewDetail';

@Component({
  selector: 'app-review-listar',
  templateUrl: './review-listar.component.html',
  styleUrls: ['./review-listar.component.css']
})
export class ReviewListarComponent implements OnInit {
  reviews: Array<Review>;
  selected = false;
  selectedReview: ReviewDetail = new ReviewDetail();

  constructor(private reviewService: ReviewService) {
  }

  getReviews(): void {
    this.reviewService.getReviews()
      .subscribe(reviews => {
        this.reviews = reviews;
      });
  }

  ngOnInit(): void {
    this.getReviews();
  }

  onSelected(review: Review): void{
    if (this.selectedReview.id === review.id && this.selected){
      this.selected = false;
    } else {
      this.selected = true;
      this.reviewService.getReview(review.id)
        .subscribe(reviewDetail => {
          this.selectedReview = reviewDetail;
        });
    }
  }

}
