import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutingListarComponent } from './outing-listar/outing-listar.component';
import { OutingDetailComponent } from './outing-detail/outing-detail.component';

const routes: Routes = [{
  path: 'outings',
  children: [
    {
      path: 'list',
      component: OutingListarComponent
    },
    {
      path: ':id',
      component: OutingDetailComponent
    },
  ]
}];
@NgModule({
  imports: [ RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class OutingRoutingModule { }
