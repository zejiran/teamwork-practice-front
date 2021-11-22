import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaturalPersonListarComponent } from './natural-person-listar/natural-person-listar.component';

const routes: Routes = [{
  path: 'persons/natural',
  children: [
    {
      path: 'list',
      component: NaturalPersonListarComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NaturalPersonRoutingModule {
}
