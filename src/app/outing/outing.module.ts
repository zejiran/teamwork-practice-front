import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutingListarComponent } from './outing-listar/outing-listar.component';
import { OutingDetailComponent } from './outing-detail/outing-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OutingListarComponent, OutingDetailComponent],
  exports: [OutingListarComponent],
})
export class OutingModule {
}
