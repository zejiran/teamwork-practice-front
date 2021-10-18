import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';
import { environment } from '../../environments/environment';


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
}
