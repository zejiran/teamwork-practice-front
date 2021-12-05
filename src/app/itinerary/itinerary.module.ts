import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryListarComponent} from './itinerary-listar/itinerary-listar.component';
import { ItineraryRoutingModule } from './itinerary.route.module';
import { ItineraryDetailComponent} from './itinerary-detail/itinerary-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ItineraryRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ItineraryListarComponent,ItineraryDetailComponent],
  exports: [ItineraryListarComponent]
})
export class ItineraryModule { }
