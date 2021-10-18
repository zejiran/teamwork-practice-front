import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route } from './route';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private apiUrl: string = environment.baseUrl + 'routes';

  constructor(private http: HttpClient) {
  }

  getRoutes(): Observable<Route[]> {
    return this.http.get<Route[]>(this.apiUrl);
  }
}
