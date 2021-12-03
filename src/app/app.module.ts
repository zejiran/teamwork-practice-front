import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewModule } from './review/review.module';
import { CommentModule } from './comment/comment.module';
import { OutingModule } from './outing/outing.module';
import { InsuranceModule } from './insurance/insurance.module';
import { QuotationModule } from './quotation/quotation.module';
import { ClientModule } from './client/client.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { PostModule } from './post/post.module';
import { TransactionModule } from './transaction/transaction.module';
import { PersonModule } from './person/person.module';

import { MultimediaModule } from './multimedia/multimedia.module';
import { NaturalPersonModule } from './naturalPerson/naturalPerson.module';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { RouteModule } from './route/route.module';
import { CalendarModule } from './calendar/calendar.module';
import { AdminModule } from './admin/admin.module';
import { BlogModule } from './blog/blog.module';
import { ActivityModule } from './activity/activity.module';
import { GuideModule } from './guide/guide.module';
import { ComplementaryInformationModule } from './complementaryinformation/complementaryinformation.module';
import { ItineraryModule } from './itinerary/itinerary.module';
import { FilesContainerListarComponent } from './FilesContainer/files-container-listar/files-container-listar.component';
import { FilesContainerDetailComponent } from './FilesContainer/files-container-detail/files-container-detail.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FilesContainerListarComponent,
    FilesContainerDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    OutingModule,
    InsuranceModule,
    QuotationModule,
    ReviewModule,
    CommentModule,
    ClientModule,
    EnterpriseModule,
    PostModule,
    TransactionModule,
    PersonModule,
    HttpClientModule,
    MultimediaModule,
    PersonModule,
    NaturalPersonModule,
    UserModule,
    LocationModule,
    RouteModule,
    CalendarModule,
    AdminModule,
    BlogModule,
    ActivityModule,
    GuideModule,
    AppRoutingModule,
    ComplementaryInformationModule,
    ItineraryModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
