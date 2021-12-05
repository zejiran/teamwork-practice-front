import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { GuideListarComponent} from './guide-listar/guide-listar.component'
import { GuideDetailComponent } from './guide-detail/guide-detail.component'
const routes: Routes = [{
  path: 'guides',
  children: [

    {
      path: 'list',
      component: GuideListarComponent
    },
    /*{
      path: 'new',
      component: AdminCreateComponent
    },*/
    {
      path: ':id',
      component: GuideDetailComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuideRoutingModule { }
