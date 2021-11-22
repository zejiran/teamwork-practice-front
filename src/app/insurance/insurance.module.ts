import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceListarComponent } from './insurance-listar/insurance-listar.component';
import { InsuranceRoutingModule } from './insurance-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InsuranceRoutingModule
  ],
  declarations: [InsuranceListarComponent],
  exports: [InsuranceListarComponent]
})
export class InsuranceModule {
}
