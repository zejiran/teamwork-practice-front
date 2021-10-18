import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {complementaryInformationListarComponent} from './complementaryinformation-listar/complementaryinformation-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [complementaryInformationListarComponent],
  exports:[complementaryInformationListarComponent]
})
export class complementaryInformationModule { }
