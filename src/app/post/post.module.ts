import {PostCreateComponent} from './post-create/post-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListarComponent } from './post-listar/post-listar.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostRoutingModule } from './post-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PostListarComponent, PostDetailComponent, PostCreateComponent],
  exports: [PostListarComponent, PostDetailComponent, PostCreateComponent],
})
export class PostModule {
}
