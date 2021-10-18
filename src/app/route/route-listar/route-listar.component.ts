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

}
