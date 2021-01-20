import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  expRes: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get(new AppComponent().getLink() + '/ExperienceREST').subscribe(
      data => {
        this.expRes = data;
      }, error => {
        console.log('Error', error);
      }
    );
  }

}
