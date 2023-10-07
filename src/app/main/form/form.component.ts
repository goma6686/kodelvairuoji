import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  comments = new FormControl('');
  carNumber: string = "";
  message: string = "";
  presetComments: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
  }

  addComment() {
    this.commentService.addComment(this.carNumber, this.message);
  }
}
