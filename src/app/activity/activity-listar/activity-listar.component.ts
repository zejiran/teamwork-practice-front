import { Component, OnInit } from '@angular/core';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-listar',
  templateUrl: './activity-listar.component.html',
  styleUrls: ['./activity-listar.component.css']
})
export class ActivityListarComponent implements OnInit {

  constructor(private activityService:ActivityService) { }
  activities:Array<Activity>

  ngOnInit() {
    this.activities;
  }
  getGuides(): void {
    this.activityService.getActivities()
      .subscribe(activities => {
        this.activities = activities;
      });
  }
}
