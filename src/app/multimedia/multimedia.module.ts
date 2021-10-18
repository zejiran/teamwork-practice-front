import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultimediaListarComponent } from './multimedia-listar/multimedia-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultimediaListarComponent],
  exports: [MultimediaListarComponent]
})
export class MultimediaModule {
}
