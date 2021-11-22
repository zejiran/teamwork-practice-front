import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewListarComponent } from './review-listar/review-listar.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';


@NgModule({
  declarations: [ReviewListarComponent, ReviewDetailComponent],
  exports: [
    ReviewListarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReviewModule {
}
