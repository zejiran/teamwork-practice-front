import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';
import { environment } from '../../environments/environment';
import { TransactionDetail } from './transaction-detail/transactionDetail';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl: string = environment.baseUrl + 'transactions';

  constructor(private http: HttpClient) {
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }
  getTransaction(transactionId): Observable<TransactionDetail> {
    return this.http.get<TransactionDetail>(`${this.apiUrl}/${transactionId}`);
  }

  createTransaction(transaction: TransactionDetail): Observable<TransactionDetail> {
    return this.http.post<TransactionDetail>(this.apiUrl, transaction);
  }
}
