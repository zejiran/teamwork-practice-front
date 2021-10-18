import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteListarComponent } from './route-listar/route-listar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RouteListarComponent],
  exports: [RouteListarComponent]
})
export class RouteModule {

}
