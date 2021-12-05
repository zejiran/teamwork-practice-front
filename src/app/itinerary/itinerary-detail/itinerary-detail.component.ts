import { Component, Input, OnInit } from '@angular/core';
import { Itinerary } from '../itinerary';

@Component({
  selector: 'app-itinerary-detail',
  templateUrl: './itinerary-detail.component.html',
  styleUrls: ['./itinerary-detail.component.scss']
})
export class ItineraryDetailComponent implements OnInit {

  @Input() itineraryDetail:Itinerary;

  constructor() { }

  ngOnInit() {
    console.log(this.itineraryDetail);
  }

}
