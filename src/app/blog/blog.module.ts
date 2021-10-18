import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListarComponent } from './blog-listar/blog-listar.component';



@NgModule({
  declarations: [BlogListarComponent],
  imports: [
    CommonModule
  ],
  exports: [BlogListarComponent]
})
export class BlogModule { }
