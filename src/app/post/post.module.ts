import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListarComponent } from './post-listar/post-listar.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostListarComponent, PostDetailComponent],
  exports: [PostListarComponent],
})
export class PostModule {
}
