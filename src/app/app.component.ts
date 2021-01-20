import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-demo-app';

  private API_URL = 'http://localhost:8080/SpringMVCDemo';
  
  getLink() {
    return this.API_URL;
  }
}
