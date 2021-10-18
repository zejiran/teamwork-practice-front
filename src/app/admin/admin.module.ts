import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListarComponent } from './admin-listar/admin-listar.component';



@NgModule({
  declarations: [AdminListarComponent],
  imports: [
    CommonModule
  ],
  exports: [AdminListarComponent]
})
export class AdminModule { }
