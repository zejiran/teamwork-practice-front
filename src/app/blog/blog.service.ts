import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Blog} from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl: string = environment.baseUrl + 'blogs';
  constructor(private http: HttpClient) { }
  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }
}
