import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListarComponent } from './comment-listar/comment-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommentListarComponent
  ],
  declarations: [CommentListarComponent]
})
export class CommentModule {
}
