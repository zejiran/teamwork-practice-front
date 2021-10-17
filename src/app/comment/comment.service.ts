import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl: string = environment.baseUrl + 'comments';
  constructor(private http: HttpClient) { }
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl);
  }
}
