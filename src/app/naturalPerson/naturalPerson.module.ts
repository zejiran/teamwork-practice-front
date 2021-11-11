import { NaturalPersonDetailComponent } from './natural-person-detail/natural-person-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturalPersonListarComponent } from './natural-person-listar/natural-person-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NaturalPersonListarComponent, NaturalPersonDetailComponent],
  exports: [NaturalPersonListarComponent, NaturalPersonDetailComponent]
})
export class NaturalPersonModule {
}
