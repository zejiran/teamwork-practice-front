import { Component, OnInit } from '@angular/core';

import {Itinerary} from '../itinerary'

import { ItineraryService} from '../itinerary.service'

@Component({
  selector: 'app-itinerary-listar',
  templateUrl: './itinerary-listar.component.html',
  styleUrls: ['./itinerary-listar.component.css']
})
export class ItineraryListarComponent implements OnInit {

  constructor(private itineraryService:ItineraryService) { }
  itineraries:Array<Itinerary>

  ngOnInit() {
    this.itineraries
  }
  getIntinereries(): void {
    this.itineraryService.getItineraries()
      .subscribe(itineraries => {
        this.itineraries = itineraries;
      });
  }
}
