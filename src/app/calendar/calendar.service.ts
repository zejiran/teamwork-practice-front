import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calendar } from './calendar';
import { environment } from '../../environments/environment';
import { CalendarDetail } from './calendar-detail';


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

  getCalendar(calendarId): Observable<CalendarDetail> {
    return this.http.get<CalendarDetail>(`${this.apiUrl}/${calendarId}`);
  }

  createCalendar(): Observable<CalendarDetail> {
    return this.http.post<CalendarDetail>(this.apiUrl, {});
  }
}
