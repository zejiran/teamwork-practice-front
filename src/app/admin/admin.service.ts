import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin} from './admin';
import {reviewDetail} from './reviewDetail';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl: string = environment.baseUrl + 'admins';
  constructor(private http: HttpClient) { }
  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl);
  }
  getAdmin(adminId): Observable<reviewDetail> {
    return this.http.get<reviewDetail>(`${this.apiUrl}/${adminId}`);
  }

  createAdmin(admin: reviewDetail): Observable<reviewDetail> {
    return this.http.post<reviewDetail>(this.apiUrl, admin);
  }

}
