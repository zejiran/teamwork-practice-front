import {Component, Input, OnInit} from '@angular/core';
import {BlogDetail} from '../blogDetail';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  @Input() blogDetail: BlogDetail;

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService
  ) {
  }

  ngOnInit(): void {
    let id = 0;
    this.activatedRoute.params.subscribe(params => {
      id = +params.id || 0;
      this.blogService.getBlog(id)
        .subscribe(personDetail => {
          this.blogDetail = personDetail;
          console.log(this.blogDetail);
        });
    });
    console.log(this.blogDetail);
  }
}
