import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplementaryInformationListarComponent } from './complementaryinformation-listar/complementaryinformation-listar.component';
import { ComplementaryinformationDetailComponent } from './complementaryinformation-detail/complementaryinformation-detail.component'
import { ComplementaryinformationCreateComponent } from './complementaryinformation-create/complementaryinformation-create.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [ComplementaryInformationListarComponent,ComplementaryinformationDetailComponent,ComplementaryinformationCreateComponent],
  exports: [ComplementaryInformationListarComponent,ComplementaryinformationDetailComponent,ComplementaryinformationCreateComponent]
})
export class ComplementaryInformationModule {

}
