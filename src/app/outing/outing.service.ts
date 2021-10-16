import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Outing } from './outing';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OutingService {

  private apiUrl:string = environment.baseUrl + 'outings';
  constructor(private http: HttpClient) { }
  getOutings(): Observable<Outing[]> {
    return this.http.get<Outing[]>(this.apiUrl);
  }

}
