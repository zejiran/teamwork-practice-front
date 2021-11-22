import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListarComponent } from './user-listar/user-listar.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [{
  path: 'users',
  children: [
    {
      path: 'list',
      component: UserListarComponent
    },
    {
      path: ':id',
      component: UserDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}
