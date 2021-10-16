import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewListarComponent } from './review-listar/review-listar.component';



@NgModule({
    declarations: [ReviewListarComponent],
    exports: [
        ReviewListarComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ReviewModule { }
