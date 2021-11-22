import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseListarComponent } from './enterprise-listar/enterprise-listar.component';
import { EnterpriseRoutingModule } from './enterprise-routing.module'

@NgModule({
  imports: [
    CommonModule,
    EnterpriseRoutingModule
  ],
  declarations: [EnterpriseListarComponent],
  exports: [EnterpriseListarComponent],
})
export class EnterpriseModule { }

