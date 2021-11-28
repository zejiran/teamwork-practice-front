import {Component, Input, OnInit} from '@angular/core';
import {BlogDetail} from '../blogDetail';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  @Input() blogDetail: BlogDetail;

  constructor(
  ) {
  }

  ngOnInit(): void {
      this.blogDetail = new BlogDetail([]);
  }
}
