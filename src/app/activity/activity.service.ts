import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {Activty} from './activity';



@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl: string = environment.baseUrl + 'activities';
  constructor(private http: HttpClient) { }
  getActivities(): Observable<Activty[]> {
    return this.http.get<Activty[]>(this.apiUrl);
  }
}
