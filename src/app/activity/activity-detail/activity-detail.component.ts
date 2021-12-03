import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  @Input() activityDetail: Activity;

  constructor() { }

  ngOnInit() {
    console.log(this.activityDetail);
  }

}
