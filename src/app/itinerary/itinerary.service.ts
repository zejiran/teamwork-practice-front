import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Itinerary } from './itinerary';



@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  private apiUrl:string = environment.baseUrl + 'itineraries';
  constructor(private http:HttpClient) {  }
  getItineraries(): Observable<Itinerary[]>{
    return this.http.get<Itinerary[]>(this.apiUrl);
  }
}
