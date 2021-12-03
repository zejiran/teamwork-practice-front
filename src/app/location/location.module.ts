import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListarComponent } from './location-listar/location-listar.component';
import { LocationRoutingModule } from './location-routing.module';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocationCreateComponent } from './location-create/location-create.component';


@NgModule({
  imports: [
    CommonModule,
    LocationRoutingModule
  ],
  declarations: [LocationListarComponent, LocationDetailComponent, LocationCreateComponent],
  exports: [LocationListarComponent, LocationDetailComponent, LocationCreateComponent]
})
export class LocationModule {

}
