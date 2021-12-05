import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewListarComponent } from './review-listar/review-listar.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import {CommentModule} from '../comment/comment.module';
import {ReviewRoutingModule} from './review.route.module';
import { ReviewCreateComponent } from './review-create/review-create.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ReviewListarComponent, ReviewDetailComponent, ReviewCreateComponent],
  exports: [
    ReviewListarComponent,
    ReviewCreateComponent
  ],
  imports: [
    CommonModule,
    CommentModule,
    ReviewRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReviewModule {
}
