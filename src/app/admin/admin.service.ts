import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin} from './admin';
import {AdminDetail} from './adminDetail';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl: string = environment.baseUrl + 'admins';
  constructor(private http: HttpClient) { }
  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl);
  }
  getAdmin(adminId): Observable<AdminDetail> {
    return this.http.get<AdminDetail>(`${this.apiUrl}/${adminId}`);
  }

  createAdmin(admin: AdminDetail): Observable<AdminDetail> {
    return this.http.post<AdminDetail>(this.apiUrl, admin);
  }

}
