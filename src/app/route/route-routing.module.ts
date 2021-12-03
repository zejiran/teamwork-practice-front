import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteListarComponent } from './route-listar/route-listar.component';

const routes: Routes = [{
  path: 'routes',
  children: [
    {
      path: 'list',
      component: RouteListarComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RouteRoutingModule {
}
