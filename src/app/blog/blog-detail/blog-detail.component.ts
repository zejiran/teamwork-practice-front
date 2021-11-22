import {Component, Input, OnInit} from '@angular/core';
import {BlogDetail} from '../blogDetail';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  @Input() blogDetail: BlogDetail;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {
  }

  ngOnInit(): void {
    this.blogDetail = new BlogDetail([]);
  }
}
