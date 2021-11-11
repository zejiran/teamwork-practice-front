import { Component, OnInit, Input } from '@angular/core';
import { CalendarDetail } from '../calendar-detail';

@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.css']
})
export class CalendarDetailComponent implements OnInit {

  @Input() calendarDetail: CalendarDetail;

  constructor() { }

  ngOnInit(): void {
    console.log(this.calendarDetail)
  }

}
