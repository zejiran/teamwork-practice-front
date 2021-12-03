import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationListarComponent } from './location-listar/location-listar.component';

const routes: Routes = [{
  path: 'locations',
  children: [
    {
      path: 'list',
      component: LocationListarComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LocationRoutingModule {
}
