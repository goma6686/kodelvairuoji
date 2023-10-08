import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CommentService} from "../../services/comment.service";
import {UserService} from "../../services/user.service";

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
  presetText: string = "";
  text: string = "";

  constructor(private commentService: CommentService,
              public userService: UserService) {
  }

  ngOnInit(): void {
  }

  addComment() {
    if (this.userService.isLoggedIn.getValue()) {
      this.commentService.addComment(this.carNumber, this.text !== "" ? this.text : this.presetText);
    } else {
      this.commentService.addComment(this.carNumber, this.presetText);
    }
  }
}
