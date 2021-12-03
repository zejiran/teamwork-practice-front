import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivityListarComponent} from './activity-listar/activity-listar.component';
import {ActivityDetailComponent} from './activity-detail/activity-detail.component';
import {ActivityCreateComponent} from './activity-create/activity-create.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule, FormsModule,ReactiveFormsModule
  ],
  declarations: [ActivityListarComponent,ActivityDetailComponent,ActivityCreateComponent],
  exports: [ActivityListarComponent,ActivityDetailComponent,ActivityCreateComponent]
})
export class ActivityModule { }
