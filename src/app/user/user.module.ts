import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListarComponent } from './user-listar/user-listar.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserListarComponent, UserDetailComponent],
  exports: [UserListarComponent, UserDetailComponent]
})
export class UserModule {
}
