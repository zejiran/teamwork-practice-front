import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultimediaListarComponent } from './multimedia-listar/multimedia-listar.component';
import { MultimediaDetailComponent } from './multimedia-detail/multimedia-detail.component';


const routes: Routes = [{
  path: 'multimedias',
  children: [
    {
      path: 'list',
      component: MultimediaListarComponent
    },
    {
      path: ':id',
      component: MultimediaDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MultimediaRoutingModule {
}
