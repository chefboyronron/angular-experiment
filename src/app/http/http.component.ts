import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  request;
  data;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSave(form: NgForm) {
    this.request = this.http.post('http://api.angular.com/', form.value)
    .subscribe(
      ( Response ) => {
        this.data = JSON.parse(Response._body);
        console.log(this.data);
      },
      ( error ) => console.log(error)
    );
  }

}
