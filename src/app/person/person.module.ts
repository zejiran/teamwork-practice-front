import { PersonCreateComponent } from './person-create/person-create.component';
import { PersonRoutingModule } from './person-routing.module';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListarComponent } from './person-listar/person-listar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PersonRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PersonListarComponent, PersonDetailComponent, PersonCreateComponent],
  exports: [PersonListarComponent, PersonDetailComponent, PersonCreateComponent]
})
export class PersonModule {
}
