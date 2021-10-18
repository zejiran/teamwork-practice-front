import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calendar } from './calendar';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private apiUrl: string = environment.baseUrl + 'calendars';

  constructor(private http: HttpClient) {
  }

  getCalendars(): Observable<Calendar[]> {
    return this.http.get<Calendar[]>(this.apiUrl);
  }
}
