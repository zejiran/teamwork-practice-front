import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route } from './route';
import { environment } from '../../environments/environment';
import { RouteDetail } from './route-detail';


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

  getRoute(routeId): Observable<RouteDetail> {
    return this.http.get<RouteDetail>(`${this.apiUrl}/${routeId}`);
  }
}
