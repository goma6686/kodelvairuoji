import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.isLoggedIn.next(localStorage.getItem("loggedIn") !== null);
  }

  logIn() {
    this.isLoggedIn.next(true);
    localStorage.setItem("loggedIn", "yesr");
  }

  logOut() {
    this.isLoggedIn.next(false);
    localStorage.removeItem("loggedIn");
  }
}
