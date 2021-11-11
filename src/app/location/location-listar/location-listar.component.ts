import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Locationn } from '../locationn';

@Component({
  selector: 'app-location-listar',
  templateUrl: './location-listar.component.html',
  styleUrls: ['./location-listar.component.css']
})
export class LocationListarComponent implements OnInit {

  locations: Array<Locationn>;

  constructor(private locationService: LocationService) {

  }


  getLocations(): void {
    this.locationService.getLocations().subscribe(locations => {
      this.locations = locations;
    });
  }

  ngOnInit(): void {
    this.getLocations();
  }

}
