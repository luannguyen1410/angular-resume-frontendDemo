import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {

  achieveRes: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get(new AppComponent().getLink() + '/AchievementREST').subscribe(
      data => {
        this.achieveRes = data;
      }, error => {
        console.log('Error', error);
      }
    );
  }

}
