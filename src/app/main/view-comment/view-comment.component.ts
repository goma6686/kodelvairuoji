import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {Observable, Subject} from "rxjs";
import {Comment} from "../../models/comment";

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.scss']
})
export class ViewCommentComponent implements OnInit {

  carNumber: string = "";
  comments: Observable<Comment[]> = new Subject();

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
  }

  getComment(): void {
    this.comments = this.commentService.getComments(this.carNumber);
    this.comments.subscribe(value => console.log(value));
  }
}
