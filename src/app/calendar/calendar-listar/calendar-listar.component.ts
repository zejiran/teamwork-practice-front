import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Calendar } from '../calendar';
import { CalendarDetail } from '../calendar-detail';

@Component({
  selector: 'app-calendar-listar',
  templateUrl: './calendar-listar.component.html',
  styleUrls: ['./calendar-listar.component.css']
})
export class CalendarListarComponent implements OnInit {

  selectedCalendar: CalendarDetail;
  selected = false;
  calendars: Array<Calendar>;

  constructor(private calendarService: CalendarService) {

  }


  getCalendars(): void {
    this.calendarService.getCalendars().subscribe(calendars => {
      this.calendars = calendars;
    });
  }

  ngOnInit(): void {
    this.getCalendars();
  }

  selectHistory(calendar: Calendar): void {
    if (this.selectedCalendar !== calendar || !(this.selected)){
      this.calendarService.getCalendar(this.selectedCalendar.id)
      .subscribe( calendarD => {
        this.selectedCalendar = calendarD;
      });
      this.selected = true;
    }
  }

}
