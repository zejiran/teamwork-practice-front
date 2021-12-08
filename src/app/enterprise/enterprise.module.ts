import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseListarComponent } from './enterprise-listar/enterprise-listar.component';
import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EnterpriseCreateComponent } from './enterprise-create/enterprise-create.component';
import { EnterpriseDetailComponent } from './enterprise-detail/enterprise-detail.component';


@NgModule({
  imports: [
    CommonModule,
    EnterpriseRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EnterpriseListarComponent, EnterpriseCreateComponent, EnterpriseDetailComponent],
  exports: [EnterpriseListarComponent, EnterpriseCreateComponent, EnterpriseDetailComponent],
})
export class EnterpriseModule { }

