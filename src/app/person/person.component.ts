import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  personRes: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get(new AppComponent().getLink() + '/PersonREST').subscribe(
      data => {
        this.personRes = data;
      }, error => {
        console.log('Error', error);
      }
    );
  }

}
