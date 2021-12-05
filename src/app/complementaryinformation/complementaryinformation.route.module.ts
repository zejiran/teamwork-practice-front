import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { ComplementaryInformationListarComponent} from './complementaryinformation-listar/complementaryinformation-listar.component'
import {ComplementaryinformationDetailComponent } from './complementaryinformation-detail/complementaryinformation-detail.component'
const routes: Routes = [{
  path: 'complementaryinformations',
  children: [

    {
      path: 'list',
      component: ComplementaryInformationListarComponent
    },
    /*{
      path: 'new',
      component: AdminCreateComponent
    },*/
    {
      path: ':id',
      component: ComplementaryinformationDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplementaryinformationRoutingModule { }
