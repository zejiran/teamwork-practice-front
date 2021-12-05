import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  @Input() activityDetail: Activity;

  constructor(private activatedRoute:ActivatedRoute,private activityService:ActivityService) { }

  ngOnInit(): void {
    let id = 0;
    this.activatedRoute.params.subscribe(params => {
      id = +params.id || 0;
      this.activityService.getActivityDetail(id)
      .subscribe(activityDetail => {
        this.activityDetail = activityDetail;
      });
    });
  }
}
