import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit{

  user: any;
  loggedIn: any;
  constructor() { }
  
  ngOnInit(): void {
  }
}
