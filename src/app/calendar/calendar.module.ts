import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarListarComponent } from './calendar-listar/calendar-listar.component';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { CalendarCreateComponent } from './calendar-create/calendar-create.component';
import { CalendarRoutingModule } from './calendar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
  ],
  declarations: [CalendarListarComponent, CalendarDetailComponent, CalendarCreateComponent],
  exports: [CalendarListarComponent, CalendarDetailComponent, CalendarCreateComponent]
})
export class CalendarModule {

}
