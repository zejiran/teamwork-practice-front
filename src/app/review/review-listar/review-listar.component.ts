import { Component, OnInit } from '@angular/core';
import {Review} from '../review';
import {ReviewService} from '../review.service';

@Component({
  selector: 'app-review-listar',
  templateUrl: './review-listar.component.html',
  styleUrls: ['./review-listar.component.css']
})
export class ReviewListarComponent implements OnInit {
  reviews!: Array<Review>;
  constructor(private reviewService: ReviewService) { }
  getReviews(): void{
    this.reviewService.getReviews()
      .subscribe(reviews => {
        this.reviews = reviews;
      });
  }

  ngOnInit(): void {
    this.getReviews();
  }

}
