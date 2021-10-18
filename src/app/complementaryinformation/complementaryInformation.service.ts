import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ComplementaryInformation } from './complementaryInformation';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ComplementaryInformationService {
  private apiUrl:string = environment.baseUrl + 'complementaryInformations';
constructor(private http: HttpClient) { }

getGuides(): Observable<ComplementaryInformation[]> {
  return this.http.get<ComplementaryInformation[]>(this.apiUrl);
}
}
