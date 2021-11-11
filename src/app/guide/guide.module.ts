import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuideListarComponent} from './guide-listar/guide-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GuideListarComponent],
  exports:[GuideListarComponent]
})
export class GuideModule { }
