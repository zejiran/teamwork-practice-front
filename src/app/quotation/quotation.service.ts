import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quotation } from './quotation';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  private apiUrl:string = environment.baseUrl + 'quotations';
  constructor(private http: HttpClient) { }
  getQuotations(): Observable<Quotation[]> {
    return this.http.get<Quotation[]>(this.apiUrl);
  }
}
