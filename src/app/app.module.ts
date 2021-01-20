import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EduComponent } from './edu/edu.component';
import { SkillComponent } from './skill/skill.component';
import { AchievementComponent } from './achievement/achievement.component';
import { ExpComponent } from './exp/exp.component';
import { FraComponent } from './fra/fra.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    EduComponent,
    SkillComponent,
    AchievementComponent,
    ExpComponent,
    FraComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
