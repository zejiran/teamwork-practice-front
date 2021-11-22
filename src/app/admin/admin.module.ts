import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListarComponent } from './admin-listar/admin-listar.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import {CommentModule} from '../comment/comment.module';



@NgModule({
  declarations: [AdminListarComponent, AdminDetailComponent],
    imports: [
        CommonModule,
        CommentModule
    ],
  exports: [AdminListarComponent]
})
export class AdminModule { }
