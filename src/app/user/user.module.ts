import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListarComponent } from './user-listar/user-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserListarComponent, UserDetailComponent],
  exports: [UserListarComponent, UserDetailComponent]
})
export class UserModule {
}
