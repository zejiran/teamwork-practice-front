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
  selected = false;
  selectedComment: CommentDetail = new CommentDetail(' ', '', []);

  constructor(private commentService: CommentService) {
  }

  getComments(): void {
    this.commentService.getComments().subscribe(comments => {
      this.comments = comments;
    });
  }

  ngOnInit(): void {
    this.getComments();
  }
  onSelected(comment: Comment): void{
    if (this.selectedComment.id === comment.id && this.selected){
      this.selected = false;
    } else {
      this.selected = true;
      this.commentService.getComment(comment.id)
        .subscribe(commentDetail => {
          this.selectedComment = commentDetail;
        });
    }
  }

}
