import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListarComponent } from './comment-listar/comment-listar.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { CommentBasicComponent } from './comment-basic/comment-basic.component';
import { CommentRepliesComponent } from './comment-replies/comment-replies.component';

@NgModule({
  imports: [
    CommonModule
  ],
    exports: [
        CommentListarComponent,
        CommentRepliesComponent
    ],
  declarations: [CommentListarComponent, CommentDetailComponent, CommentBasicComponent, CommentRepliesComponent]
})
export class CommentModule {
}
