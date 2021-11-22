import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminDetailComponent} from './admin-detail/admin-detail.component';
import {AdminListarComponent} from './admin-listar/admin-listar.component';

const routes: Routes = [{
  path: 'admins',
  children: [

    {
      path: 'list',
      component: AdminListarComponent
    },
    /*{
      path: 'new',
      component: AdminCreateComponent
    },*/
    {
      path: ':id',
      component: AdminDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
