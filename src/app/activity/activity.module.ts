import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivityListarComponent} from './activity-listar/activity-listar.component';
import {ActivityDetailComponent} from './activity-detail/activity-detail.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActivityListarComponent,ActivityDetailComponent],
  exports: [ActivityListarComponent,ActivityDetailComponent]
})
export class ActivityModule { }
