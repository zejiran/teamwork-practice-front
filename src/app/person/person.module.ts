import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListarComponent } from './person-listar/multimedia-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PersonListarComponent],
  exports: [PersonListarComponent]
})
export class PersonModule {
}
