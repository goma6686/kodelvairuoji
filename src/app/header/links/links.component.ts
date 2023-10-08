import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit{

  currentRoute: string = '';
  loggedIn: boolean = false;

  constructor(private router: Router,
              private userService: UserService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
   }

  ngOnInit(): void {
    this.userService.isLoggedIn.subscribe(isLoggedIn => this.loggedIn = isLoggedIn);
  }

  logIn() {
    this.userService.logIn();
  }

  logOut() {
    this.userService.logOut();
  }
}
