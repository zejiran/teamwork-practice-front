import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';
import { environment } from '../../environments/environment';
import { PostDetail } from './post-detail/postDetail';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl: string = environment.baseUrl + 'posts';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPost(id: number): Observable<PostDetail> {
    return this.http.get<PostDetail>(this.apiUrl + '/' + id.toString());
  }

  createPost(post: Post): Observable<PostDetail> {
    return this.http.post<PostDetail>(this.apiUrl, post);
  }
}
