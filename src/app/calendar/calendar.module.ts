import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarListarComponent } from './calendar-listar/calendar-listar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalendarListarComponent],
  exports: [CalendarListarComponent]
})
export class CalendarModule {

}
