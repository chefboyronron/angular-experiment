import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  persons = [
    {
      id: 1,
      name: 'Ron',
    },
    {
      id: 2,
      name: 'Kyle',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
