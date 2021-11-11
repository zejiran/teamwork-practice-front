import { Component, OnInit } from '@angular/core';
import { RouteService } from '../route.service';
import { Route } from '../route';

@Component({
  selector: 'app-route-listar',
  templateUrl: './route-listar.component.html',
  styleUrls: ['./route-listar.component.css']
})
export class RouteListarComponent implements OnInit {

  routes: Array<Route>;
  selectedRoute: Route;
  selected= false;

  constructor(private routeService: RouteService) {

  }


  getRoutes(): void {
    this.routeService.getRoutes().subscribe(routes => {
      this.routes = routes;
    })
  }

  ngOnInit(): void {
    this.getRoutes();
  }

  onSelected(route: Route): void{
    if (this.selectedRoute==route && this.selected){
      this.selected=false;
    } else {
      this.selected=true;
      this.selectedRoute=route;
    }
  }
}
