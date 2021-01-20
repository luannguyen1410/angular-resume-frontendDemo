import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skillRes: any;

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get(new AppComponent().getLink() + '/SkillsREST').subscribe(
      data => {
        this.skillRes = data;
      }, error => {
        console.log('Error', error);
      }
    );
  }

}
