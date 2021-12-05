import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './comment';
import {CommentDetail} from './commentDetail';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl: string = environment.baseUrl + 'comments';

  constructor(private http: HttpClient) {
  }
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl);
  }
  getComment(commentId): Observable<CommentDetail> {
    return this.http.get<CommentDetail>(`${this.apiUrl}/${commentId}`);
  }
  createReply(fatherId: number, comment: CommentDetail): Observable<CommentDetail> {
    return this.http.post<CommentDetail>(`${this.apiUrl}/${fatherId}/replies`, comment);
  }
  createComment(comment: CommentDetail): Observable<CommentDetail> {
    return this.http.post<CommentDetail>(`${this.apiUrl}`, comment);
  }
}
