import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BlogDetail} from './blogDetail';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl: string = environment.baseUrl + 'blogs';

  constructor(private http: HttpClient) {
  }

  getBlogs(): Observable<BlogDetail[]> {
    return this.http.get<BlogDetail[]>(this.apiUrl);
  }

  getBlog(BlogId): Observable<BlogDetail> {
    return this.http.get<BlogDetail>(`${this.apiUrl}/${BlogId}`);
  }

  createBlog(blog: BlogDetail): Observable<BlogDetail> {
    return this.http.post<BlogDetail>(this.apiUrl, blog);
  }
}
