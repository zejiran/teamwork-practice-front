import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enterprise } from './enterprise';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  private apiUrl: string = environment.baseUrl + 'enterprises';

  constructor(private http: HttpClient) {
  }

  getEnterprises(): Observable<Enterprise[]> {
    return this.http.get<Enterprise[]>(this.apiUrl);
  }

  createEnterprise(enterprise: Enterprise): Observable<Enterprise> {
    return this.http.post<Enterprise>(this.apiUrl, enterprise);
  }
}
