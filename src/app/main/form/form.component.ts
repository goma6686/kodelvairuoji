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
  presetComments: string[] = ['Vairavimas (KET)', 'Parkavimas', 'Vairavimo etiketas', 'Įvaizdis / Dizainas'];

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
  }

  addComment() {
    this.commentService.addComment(this.carNumber, this.message);
  }
}
