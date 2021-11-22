import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewListarComponent } from './review-listar/review-listar.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { ReviewBasicComponent } from './review-basic/review-basic.component';
import {CommentModule} from "../comment/comment.module";


@NgModule({
  declarations: [ReviewListarComponent, ReviewDetailComponent, ReviewBasicComponent],
  exports: [
    ReviewListarComponent
  ],
    imports: [
        CommonModule,
        CommentModule
    ]
})
export class ReviewModule {
}
