import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewModule } from './review/review.module';
import { CommentModule } from './comment/comment.module';
import { HttpClientModule } from '@angular/common/http';
import { OutingModule } from './outing/outing.module';
import { InsuranceModule } from './insurance/insurance.module';
import { QuotationModule } from './quotation/quotation.module';
import { ClientModule } from './client/client.module';
import { MultimediaModule } from './multimedia/multimedia.module';
import { PersonModule } from './person/person.module';
import { NaturalPersonModule } from './naturalPerson/naturalPerson.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OutingModule,
    InsuranceModule,
    QuotationModule,
    ReviewModule,
    CommentModule,
    ClientModule,
    MultimediaModule,
    PersonModule,
    NaturalPersonModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
