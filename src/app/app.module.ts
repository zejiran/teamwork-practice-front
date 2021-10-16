import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReviewModule} from './review/review.module';
import {CommentModule} from './comment/comment.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReviewModule,
        HttpClientModule,
        CommentModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
