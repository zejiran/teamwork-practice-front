import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';
import { PersonDetail } from './person-detail/personDetail';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl: string = environment.baseUrl + 'persons';

  constructor(private http: HttpClient) {
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  getPerson(id: number): Observable<PersonDetail> {
    return this.http.get<PersonDetail>(this.apiUrl + '/' + id.toString());
  }

  createPerson(person: Person): Observable<PersonDetail> {
    return this.http.post<PersonDetail>(this.apiUrl, person);
  }
}
