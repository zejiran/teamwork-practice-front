import { Component, OnInit } from '@angular/core';
import {Blog} from '../blog';

@Component({
  selector: 'app-blog-listar',
  templateUrl: './blog-listar.component.html',
  styleUrls: ['./blog-listar.component.css']
})
export class BlogListarComponent implements OnInit {
  blogs: Array<Blog>;
  constructor() { }

  ngOnInit(): void {
  }

}
