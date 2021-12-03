import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteListarComponent } from './route-listar/route-listar.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RouteListarComponent, RouteDetailComponent],
  exports: [RouteListarComponent, RouteDetailComponent]
})
export class RouteModule {

}
