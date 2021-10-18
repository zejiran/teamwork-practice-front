import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplementaryInformationListarComponent } from './complementaryinformation-listar/complementaryinformation-listar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComplementaryInformationListarComponent],
  exports: [ComplementaryInformationListarComponent]
})
export class ComplementaryInformationModule {

}
