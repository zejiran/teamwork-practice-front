import { Component, OnInit, Input } from '@angular/core';
import { LocationDetail } from '../location-detail';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  @Input() locationDetail: LocationDetail;

  constructor() { }

  ngOnInit(): void {
    console.log(this.locationDetail);
  }

}
