import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Outing } from './outing';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { OutingDetail } from './outingDetail';

@Injectable({
  providedIn: 'root'
})
export class OutingService {

  private apiUrl: string = environment.baseUrl + 'outings';

  constructor(private http: HttpClient) {
  }

  getOutings(): Observable<Array<OutingDetail>> {
    return this.http.get<Array<OutingDetail>>(this.apiUrl);
  }

  getOutingDetail(outingId): Observable<OutingDetail> {
    return this.http.get<OutingDetail>(`${this.apiUrl}/${outingId}`);
  }

  createOuting(outing: Outing): Observable<Outing> {
    return this.http.post<Outing>(this.apiUrl, outing);
  }

}
