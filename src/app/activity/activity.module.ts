import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivityListarComponent} from './activity-listar/activity-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActivityListarComponent],
  exports:[ActivityListarComponent]
})
export class ActivityModule { }
