import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutingListarComponent } from './outing-listar/outing-listar.component';
import { OutingDetailComponent } from './outing-detail/outing-detail.component';
import { OutingRoutingModule } from './outing-routing.module';


@NgModule({
  imports: [
    CommonModule,
    OutingRoutingModule
  ],
  declarations: [OutingListarComponent, OutingDetailComponent],
  exports: [OutingListarComponent],
})
export class OutingModule {
}
