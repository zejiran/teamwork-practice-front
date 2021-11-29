import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListarComponent } from './admin-listar/admin-listar.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import {CommentModule} from '../comment/comment.module';
import {AdminRoutingModule} from './admin.route.module';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AdminListarComponent, AdminDetailComponent, AdminCreateComponent],
    imports: [
        CommonModule,
        CommentModule,
        AdminRoutingModule,
        ReactiveFormsModule
    ],
  exports: [AdminListarComponent]
})
export class AdminModule { }
