import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './multimedia';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl: string = environment.baseUrl + 'multimedias';

  constructor(private http: HttpClient) {
  }

  getMultimedias(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

}
