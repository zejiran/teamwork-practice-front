import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutingListarComponent } from './outing-listar/outing-listar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OutingListarComponent],
  exports: [OutingListarComponent],
})
export class OutingModule { }
