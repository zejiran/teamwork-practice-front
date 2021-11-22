import { Component, OnInit } from '@angular/core';
import {Blog} from '../blog';
import {BlogService} from '../blog.service';
import {BlogDetail} from '../blogDetail';

@Component({
  selector: 'app-blog-listar',
  templateUrl: './blog-listar.component.html',
  styleUrls: ['./blog-listar.component.css']
})
export class BlogListarComponent implements OnInit {
  blogs: Array<BlogDetail>;
  selected = false;
  selectedBlog: BlogDetail = new BlogDetail();
  constructor(private blogService: BlogService) { }
  getBlogs(): void {
    this.blogService.getBlogs()
      .subscribe(blogs => {
        this.blogs = blogs;
    });
  }

  ngOnInit(): void {
    this.getBlogs();
  }

  onSelected(blog: Blog): void{
    if (this.selectedBlog.id === blog.id && this.selected){
      this.selected = false;
    } else {
      this.selected = true;
      this.blogService.getBlog(blog.id)
        .subscribe(blogDetail => {
          this.selectedBlog = blogDetail;
        });
    }
  }
}
