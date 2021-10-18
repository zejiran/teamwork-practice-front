import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Multimedia } from './multimedia';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  private apiUrl: string = environment.baseUrl + 'multimedias';

  constructor(private http: HttpClient) {
  }

  getMultimedias(): Observable<Multimedia[]> {
    return this.http.get<Multimedia[]>(this.apiUrl);
  }
}
