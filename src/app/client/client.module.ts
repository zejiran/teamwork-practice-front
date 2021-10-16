import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListarComponent } from './client-listar/client-listar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientListarComponent],
  exports: [ClientListarComponent]
})
export class ClientModule { }
