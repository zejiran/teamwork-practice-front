import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { OutingModule } from './outing/outing.module';
import { InsuranceModule } from './insurance/insurance.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OutingModule,
    InsuranceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
