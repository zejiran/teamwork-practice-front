import { UserDetail } from './user-detail/userDetail';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.baseUrl + 'users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number): Observable<UserDetail> {
    return this.http.get<UserDetail>(this.apiUrl + '/' + id.toString());
  }

  createUser(user: User): Observable<UserDetail> {
    return this.http.post<UserDetail>(this.apiUrl, user);
  }
}
