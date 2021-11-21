import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultimediaListarComponent } from './multimedia-listar/multimedia-listar.component';
import { MultimediaDetailComponent } from './multimedia-detail/multimedia-detail.component';
import { MultimediaRoutingModule } from './multimedia-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MultimediaRoutingModule
  ],
  declarations: [MultimediaListarComponent, MultimediaDetailComponent],
  exports: [MultimediaListarComponent, MultimediaDetailComponent]
})
export class MultimediaModule {
}
