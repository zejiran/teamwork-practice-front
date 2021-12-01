import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListarComponent } from './blog-listar/blog-listar.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import {PostModule} from '../post/post.module';
import {BlogRoutingModule} from './blog.route.module';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [BlogListarComponent, BlogDetailComponent, BlogCreateComponent],
    imports: [
        CommonModule,
        PostModule,
        BlogRoutingModule,
        ReactiveFormsModule
    ],
  exports: [BlogListarComponent]
})
export class BlogModule { }
