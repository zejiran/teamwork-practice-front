import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListarComponent } from './location-listar/location-listar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LocationListarComponent],
  exports: [LocationListarComponent]
})
export class LocationModule {

}
