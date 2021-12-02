import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseListarComponent } from './enterprise-listar/enterprise-listar.component';
import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EnterpriseCreateComponent } from './enterprise-create/enterprise-create.component';


@NgModule({
  imports: [
    CommonModule,
    EnterpriseRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EnterpriseListarComponent, EnterpriseCreateComponent],
  exports: [EnterpriseListarComponent, EnterpriseCreateComponent],
})
export class EnterpriseModule { }

