import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListarComponent } from './post-listar/post-listar.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  declarations: [PostListarComponent, PostDetailComponent],
  exports: [PostListarComponent],
})
export class PostModule {
}
