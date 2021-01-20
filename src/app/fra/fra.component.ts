import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fra',
  templateUrl: './fra.component.html',
  styleUrls: ['./fra.component.css']
})
export class FraComponent implements OnInit {

  frameworkRes: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get(new AppComponent().getLink() + '/FraREST').subscribe(
      data => {
        this.frameworkRes = data;
      }, error => {
        console.log('Error', error);
      }
    );
  }

}
