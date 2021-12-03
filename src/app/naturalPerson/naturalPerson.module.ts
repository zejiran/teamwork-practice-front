import { ReactiveFormsModule } from '@angular/forms';
import { NaturalPersonCreateComponent } from './natural-person-create/natural-person-create.component';
import { NaturalPersonDetailComponent } from './natural-person-detail/natural-person-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturalPersonListarComponent } from './natural-person-listar/natural-person-listar.component';
import { NaturalPersonRoutingModule } from './naturalPerson-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NaturalPersonRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NaturalPersonListarComponent, NaturalPersonDetailComponent, NaturalPersonCreateComponent],
  exports: [NaturalPersonListarComponent, NaturalPersonDetailComponent, NaturalPersonCreateComponent]
})
export class NaturalPersonModule {
}
