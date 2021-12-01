import { MultimediaCreateComponent } from './multimedia-create/multimedia-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultimediaListarComponent } from './multimedia-listar/multimedia-listar.component';
import { MultimediaDetailComponent } from './multimedia-detail/multimedia-detail.component';
import { MultimediaRoutingModule } from './multimedia-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MultimediaRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MultimediaListarComponent, MultimediaDetailComponent, MultimediaCreateComponent],
  exports: [MultimediaListarComponent, MultimediaDetailComponent, MultimediaCreateComponent]
})
export class MultimediaModule {
}
