import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListarComponent } from './post-listar/post-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostListarComponent],
  exports: [PostListarComponent],
})
export class PostModule { }
