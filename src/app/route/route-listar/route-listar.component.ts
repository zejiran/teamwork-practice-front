import { Component, OnInit } from '@angular/core';
import { LocationService } from '../route.service';
import { Route } from '../route';

@Component({
  selector: 'app-route-listar',
  templateUrl: './route-listar.component.html',
  styleUrls: ['./route-listar.component.css']
})
export class LocationListarComponent implements OnInit {

  routes: Array<Route>;

  constructor(private routeService: LocationService) {

  }


  getLocations(): void {
    this.routeService.getLocations().subscribe(routes => {
      this.routes = routes;
    })
  }

  ngOnInit(): void {
    this.getLocations();
  }

}
