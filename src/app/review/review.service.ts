import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from './review';
import {ReviewDetail} from './reviewDetail';
import {BlogDetail} from '../blog/blogDetail';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl: string = environment.baseUrl + 'reviews';
  constructor(private http: HttpClient) {
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl);
  }

  getReview(reviewId): Observable<ReviewDetail> {
    return this.http.get<ReviewDetail>(`${this.apiUrl}/${reviewId}`);
  }
  createReview(routeId: number, review: ReviewDetail): Observable<ReviewDetail>{
    return this.http.post<ReviewDetail>(`routes/${routeId}/reviews`, review);
  }
}
