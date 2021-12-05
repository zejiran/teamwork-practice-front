import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ActivityListarComponent} from './activity-listar/activity-listar.component';
import {ActivityDetailComponent} from './activity-detail/activity-detail.component';

const routes: Routes = [{
  path: 'activities',
  children: [

    {
      path: 'list',
      component: ActivityListarComponent
    },
    /*{
      path: 'new',
      component: AdminCreateComponent
    },*/
    {
      path: ':id',
      component: ActivityDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
