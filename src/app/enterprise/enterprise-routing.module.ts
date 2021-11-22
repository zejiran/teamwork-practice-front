import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterpriseListarComponent } from './enterprise-listar/enterprise-listar.component';

const routes: Routes = [{
  path: 'enterprises',
  children: [
    {
      path: 'list',
      component: EnterpriseListarComponent
    },
  ]
}];
@NgModule({
  imports: [ RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class EnterpriseRoutingModule { }
