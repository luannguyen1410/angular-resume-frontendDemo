import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'resume-demo-app';

  personRes: any;
  skillRes: any;
  eduRes: any;
  achieveRes: any;
  expRes: any;
  frameworkRes: any;

  private API_URL = 'http://localhost:8080/SpringMVCDemo';

  constructor(private _http: HttpClient) {}

  // Fetch REST API from Backend
  ngOnInit() {
    this._http.get(this.API_URL + '/PersonREST').subscribe(
      data => {
        this.personRes = data;
        console.log(this.personRes);
      }, error => {
        console.log('Error', error);
      }
    );

    this._http.get(this.API_URL + '/SkillsREST').subscribe(
      data => {
        this.skillRes = data;
        console.log(this.skillRes);
      }, error => {
        console.log('Error', error);
      }
    );

    this._http.get(this.API_URL + '/EducationREST').subscribe(
      data => {
        this.eduRes = data;
        console.log(this.eduRes);
      }, error => {
        console.log('Error', error);
      }
    );

    this._http.get(this.API_URL + '/AchievementREST').subscribe(
      data => {
        this.achieveRes = data;
        console.log(this.achieveRes);
      }, error => {
        console.log('Error', error);
      }
    );

    this._http.get(this.API_URL + '/ExperienceREST').subscribe(
      data => {
        this.expRes = data;
        console.log(this.expRes);
      }, error => {
        console.log('Error', error);
      }
    );

    this._http.get(this.API_URL + '/FraREST').subscribe(
      data => {
        this.frameworkRes = data;
        console.log(this.frameworkRes);
      }, error => {
        console.log('Error', error);
      }
    );
  }

}
