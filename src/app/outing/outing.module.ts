import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OutingCreateComponent } from './outing-create/outing-create.component';
import { OutingListarComponent } from './outing-listar/outing-listar.component';
import { OutingDetailComponent } from './outing-detail/outing-detail.component';
import { OutingRoutingModule } from './outing-routing.module';


@NgModule({
  imports: [
    CommonModule,
    OutingRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OutingListarComponent, OutingDetailComponent, OutingCreateComponent],
  exports: [OutingListarComponent, OutingCreateComponent],
})
export class OutingModule {
}
