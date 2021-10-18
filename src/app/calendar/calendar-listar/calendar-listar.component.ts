import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Calendar } from '../calendar';

@Component({
  selector: 'app-calendar-listar',
  templateUrl: './calendar-listar.component.html',
  styleUrls: ['./calendar-listar.component.css']
})
export class CalendarListarComponent implements OnInit {

  calendars: Array<Calendar>;

  constructor(private calendarService: CalendarService) {

  }


  getCalendars(): void {
    this.calendarService.getCalendars().subscribe(calendars => {
      this.calendars = calendars;
    })
  }

  ngOnInit(): void {
    this.getCalendars();
  }

}
