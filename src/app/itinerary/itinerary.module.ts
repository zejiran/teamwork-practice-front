import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItineraryListarComponent} from './itinerary-listar/itinerary-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItineraryListarComponent],
  exports:[ItineraryListarComponent]
})
export class itineraryModule { }