import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryListarComponent} from './itinerary-listar/itinerary-listar.component';
import { ItineraryRoutingModule } from './itinerary.route.module';
import { ItineraryDetailComponent} from './itinerary-detail/itinerary-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItineraryCreateComponent } from './itinerary-create/itinerary-create.component';
@NgModule({
  imports: [
    CommonModule,
    ItineraryRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ItineraryListarComponent,ItineraryDetailComponent,ItineraryCreateComponent],
  exports: [ItineraryListarComponent]
})
export class ItineraryModule { }
