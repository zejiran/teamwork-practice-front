import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Itinerary } from './itinerary';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  private apiUrl:string = environment.baseUrl + 'itineraries';
constructor(private http: HttpClient) { }

getItineraries():Observable<Itinerary[]>{
  return this.http.get<Itinerary[]>(this.apiUrl)
}
getItineraryDetail(itineraryid): Observable<Itinerary>{
  return this.http.get<Itinerary>(`${this.apiUrl}/${itineraryid}`);
}
createItinerary(itinerary: Itinerary):Observable<Itinerary>{
  return this.http.post<Itinerary>(this.apiUrl, itinerary);
}
}
