import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { ItineraryListarComponent } from './itinerary-listar/itinerary-listar.component'
const routes: Routes = [{
  path: 'itineraries',
  children: [

    {
      path: 'list',
      component: ItineraryListarComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItineraryRoutingModule { }
