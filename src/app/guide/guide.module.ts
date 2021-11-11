import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuideListarComponent} from './guide-listar/guide-listar.component';
import { GuideDetailComponent } from './guide-detail/guide-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GuideListarComponent,GuideDetailComponent],
  exports:[GuideListarComponent]
})
export class GuideModule { }
