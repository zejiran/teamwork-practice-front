import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guide } from './guide';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GuideDetail } from './guideDetail';
@Injectable({
  providedIn: 'root'
})
export class GuideService {
  private apiUrl: string = environment.baseUrl + 'guides';
constructor(private http: HttpClient) { }

getGuides(): Observable<GuideDetail[]> {
  return this.http.get<GuideDetail[]>(this.apiUrl);
}
}

