import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceListarComponent } from './insurance-listar/insurance-listar.component';

const routes: Routes = [{
  path: 'insurances',
  children: [
    {
      path: 'list',
      component: InsuranceListarComponent
    },
  ]
}];
@NgModule({
  imports: [ RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class InsuranceRoutingModule { }
