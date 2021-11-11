import { Component, OnInit } from '@angular/core';

import { ActivityService } from '../activity.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-activity-listar',
  templateUrl: './activity-listar.component.html',
  styleUrls: ['./activity-listar.component.css']
})
export class ActivityListarComponent implements OnInit {

  activities: Array<Activity>;
  constructor(private activityService: ActivityService) { }

  getActivities(): void {
    this.activityService.getActivities()
      .subscribe(activities => {
        this.activities = activities;
      });
  }

  ngOnInit(): void {
    this.getActivities();
  }

}
