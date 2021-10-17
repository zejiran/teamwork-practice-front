import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListarComponent } from './user-listar/person-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserListarComponent],
  exports: [UserListarComponent]
})
export class UserModule {
}
