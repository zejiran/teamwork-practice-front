import { PersonRoutingModule } from './person-routing.module';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListarComponent } from './person-listar/person-listar.component';

@NgModule({
  imports: [
    CommonModule,
    PersonRoutingModule
  ],
  declarations: [PersonListarComponent, PersonDetailComponent],
  exports: [PersonListarComponent, PersonDetailComponent]
})
export class PersonModule {
}
