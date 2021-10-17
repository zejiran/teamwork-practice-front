import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseListarComponent } from './enterprise-listar/enterprise-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EnterpriseListarComponent],
  declarations: [EnterpriseListarComponent],

})
export class EnterpriseModule {
}
