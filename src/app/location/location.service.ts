import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Locationn } from './locationn';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl: string = environment.baseUrl + 'locations';

  constructor(private http: HttpClient) {
  }

  getLocations(): Observable<Locationn[]> {
    return this.http.get<Locationn[]>(this.apiUrl);
  }
}
