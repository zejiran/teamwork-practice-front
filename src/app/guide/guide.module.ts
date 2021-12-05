import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuideListarComponent} from './guide-listar/guide-listar.component';
import { GuideDetailComponent } from './guide-detail/guide-detail.component';
import { GuideRoutingModule } from './guide.route.module'
import { GuideCreateComponent } from './guide-create/guide-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,GuideRoutingModule,ReactiveFormsModule
  ],

  declarations: [GuideListarComponent, GuideDetailComponent,GuideCreateComponent],
  exports: [GuideListarComponent]

})
export class GuideModule { }
