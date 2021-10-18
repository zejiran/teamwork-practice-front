import { Component, OnInit } from '@angular/core';
import {Blog} from '../blog';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-listar',
  templateUrl: './blog-listar.component.html',
  styleUrls: ['./blog-listar.component.css']
})
export class BlogListarComponent implements OnInit {
  blogs: Array<Blog>;
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

}
