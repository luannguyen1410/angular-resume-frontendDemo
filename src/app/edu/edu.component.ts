import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {

  eduRes: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get(new AppComponent().getLink() + '/EducationREST').subscribe(
      data => {
        this.eduRes = data;
      }, error => {
        console.log('Error', error);
      }
    );
  }

}
