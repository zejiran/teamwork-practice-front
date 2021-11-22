import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewListarComponent } from './review-listar/review-listar.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import {CommentModule} from '../comment/comment.module';
import {ReviewRoutingModule} from './review.route.module';


@NgModule({
  declarations: [ReviewListarComponent, ReviewDetailComponent],
  exports: [
    ReviewListarComponent
  ],
    imports: [
        CommonModule,
        CommentModule,
      ReviewRoutingModule
    ]
})
export class ReviewModule {
}
