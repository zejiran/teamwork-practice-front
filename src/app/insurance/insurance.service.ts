import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Insurance } from './insurance';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  private apiUrl: string = environment.baseUrl + 'insurances';

  constructor(private http: HttpClient) {
  }

  getInsurances(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.apiUrl);
  }

}
