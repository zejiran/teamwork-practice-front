import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarListarComponent } from './calendar-listar/calendar-listar.component';

const routes: Routes = [{
  path: 'calendars',
  children: [
    {
      path: 'list',
      component: CalendarListarComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CalendarRoutingModule {
}
