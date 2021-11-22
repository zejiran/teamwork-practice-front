import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListarComponent } from './person-listar/person-listar.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';


const routes: Routes = [{
  path: 'persons',
  children: [
    {
      path: 'list',
      component: PersonListarComponent
    },
    {
      path: ':id',
      component: PersonDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PersonRoutingModule {
}
