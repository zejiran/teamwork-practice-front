import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComplementaryInformation } from './complementaryinformation';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class complementaryinformationService {
  private apiUrl: string = environment.baseUrl + 'complementaryinformations';

  constructor(private http: HttpClient) {
  }

  getComplementaryInformations(): Observable<ComplementaryInformation[]> {
    const respuesta = this.http.get<ComplementaryInformation[]>(this.apiUrl);
    console.log(respuesta);
    console.log('hola',respuesta);
    return respuesta;
  }
}
