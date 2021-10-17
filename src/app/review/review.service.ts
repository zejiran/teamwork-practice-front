import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Review} from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl: string = environment.baseUrl + 'reviews';
  constructor(private http: HttpClient) { }
  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl);
  }
}
