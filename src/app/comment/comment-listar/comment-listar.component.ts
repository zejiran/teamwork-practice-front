import {Component, Input, OnInit} from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import {CommentDetail} from '../commentDetail';

@Component({
  selector: 'app-comment-listar',
  templateUrl: './comment-listar.component.html',
  styleUrls: ['./comment-listar.component.scss']
})
export class CommentListarComponent implements OnInit {
  @Input() comments: Array<Comment>;
  @Input() all = true;
  selected = false;
  selectedComment: CommentDetail = new CommentDetail(' ', '',  []);

  constructor(private commentService: CommentService) {
  }

  getComments(): void {
    this.commentService.getComments().subscribe(comments => {
      this.comments = comments;
    });
  }

  ngOnInit(): void {
    if (this.all){
      this.getComments();
    }
  }
}
