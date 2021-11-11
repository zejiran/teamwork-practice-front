import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarListarComponent } from './calendar-listar/calendar-listar.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalendarListarComponent, CalendarDetailComponent],
  exports: [CalendarListarComponent]
})
export class CalendarModule {

}
