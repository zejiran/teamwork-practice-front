import { Component, Input, OnInit } from '@angular/core';
import { RouteDetail } from 'src/app/route/route-detail';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css']
})
export class RouteDetailComponent implements OnInit {

  @Input() routeDetail: RouteDetail;

  constructor() { }

  ngOnInit(): void {
    this.routeDetail = new RouteDetail(0, '', 0, 0);
  }

}
