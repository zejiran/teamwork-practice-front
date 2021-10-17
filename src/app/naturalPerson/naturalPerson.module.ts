import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturalPersonListarComponent } from './natural-person-listar/natural-person-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NaturalPersonListarComponent],
  exports: [NaturalPersonListarComponent]
})
export class NaturalPersonModule {
}
