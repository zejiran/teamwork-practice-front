import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceListarComponent } from './insurance-listar/insurance-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InsuranceListarComponent],
  exports: [InsuranceListarComponent]
})
export class InsuranceModule {
}
