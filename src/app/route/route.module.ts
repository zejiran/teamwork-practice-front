import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteListarComponent } from './route-listar/route-listar.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import {ReviewModule} from '../review/review.module';
import {RouteRoutingModule} from './route-routing.module';
import { RouteCreateComponent } from './route-create/route-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        ReviewModule,
        RouteRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [RouteListarComponent, RouteDetailComponent,RouteCreateComponent],
  exports: [RouteListarComponent, RouteDetailComponent,RouteCreateComponent]
})
export class RouteModule {

}
