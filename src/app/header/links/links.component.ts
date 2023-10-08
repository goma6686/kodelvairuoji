import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit{

  currentRoute: string = '';

  constructor(private router: Router,
              private ref: ChangeDetectorRef,
              public userService: UserService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
   }

  ngOnInit(): void {
    this.userService.isLoggedIn.subscribe(() => this.ref.detectChanges());
  }
}
