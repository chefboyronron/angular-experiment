import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus = [
    { name: 'Route', href: '/route' },
    { name: 'Http', href: '/http' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
