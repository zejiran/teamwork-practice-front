import { Component, OnInit } from '@angular/core';
import { Itinerary} from '../itinerary';
import { ItineraryService} from '../itinerary.service';


@Component({
  selector: 'app-itinerary-listar',
  templateUrl: './itinerary-listar.component.html',
  styleUrls: ['./itinerary-listar.component.css']
})
export class ItineraryListarComponent implements OnInit {

  itineraries: Array<Itinerary>;
  constructor(private itineraryService: ItineraryService) { }
  getItineraries(): void{
    this.itineraryService.getItineraries()
    .subscribe(itineraries => {
      this.itineraries = itineraries;
    });
  }
  ngOnInit(): void {
    this.getItineraries;
  }


}
