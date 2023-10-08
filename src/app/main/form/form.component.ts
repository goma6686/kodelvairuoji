import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CommentService} from "../../services/comment.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  comments = new FormControl('');
  carNumber: string = "";
  presetComments: string[] = ['Vairavimas (KET)', 'Parkavimas', 'Vairavimo etiketas', 'Įvaizdis / Dizainas'];
  presetText: string = "";
  text: string = "";
  location: string = "";
  positive: boolean | undefined;

  constructor(private commentService: CommentService,
              private router: Router,
              public userService: UserService) {
  }

  ngOnInit(): void {
  }

  addComment() {
    if (this.userService.isLoggedIn.getValue()) {
      this.commentService.addComment(this.carNumber, this.location, this.text !== "" ? this.text : this.presetText, this.positive || false);
    } else {
      this.commentService.addComment(this.carNumber, this.location, this.presetText, this.positive || false);
    }
    console.log(this.positive);
    this.router.navigate(['/view']);
  }
}
