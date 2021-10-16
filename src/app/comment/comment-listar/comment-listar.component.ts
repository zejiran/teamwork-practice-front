import { Component, OnInit } from '@angular/core';
import {Comment} from '../comment';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-comment-listar',
  templateUrl: './comment-listar.component.html',
  styleUrls: ['./comment-listar.component.scss']
})
export class CommentListarComponent implements OnInit {
  comments: Array<Comment>;
  constructor(private commentService: CommentService) { }
  getComments(): void {
    this.commentService.getComments().subscribe(comments => {
      this.comments = comments;
    });
  }

  ngOnInit(): void {
    this.getComments();
  }

}
