import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListarComponent } from './admin-listar/admin-listar.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import {CommentModule} from '../comment/comment.module';
import {AdminRoutingModule} from './admin.route.module';



@NgModule({
  declarations: [AdminListarComponent, AdminDetailComponent],
  imports: [
    CommonModule,
    CommentModule,
    AdminRoutingModule
  ],
  exports: [AdminListarComponent]
})
export class AdminModule { }
