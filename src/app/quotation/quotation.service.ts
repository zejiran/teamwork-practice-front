import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quotation } from './quotation';
import { environment } from '../../environments/environment';
import { QuotationDetail } from './quotation-detail';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  private apiUrl: string = environment.baseUrl + 'quotations';

  constructor(private http: HttpClient) {
  }

  getQuotations(): Observable<Quotation[]> {
    return this.http.get<Quotation[]>(this.apiUrl);
  }

  getQuotation(quotationId: number): Observable<QuotationDetail> {
    return this.http.get<QuotationDetail>(`${this.apiUrl}/${quotationId}`);
  }

  createQuotation(quotation): Observable<QuotationDetail> {
    return this.http.post<QuotationDetail>(this.apiUrl, quotation);
  }
}
