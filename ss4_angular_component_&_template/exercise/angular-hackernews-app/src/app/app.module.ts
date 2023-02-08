import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LikeComponent } from './like/like.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NameCardComponent } from './ss5_components_interaction/practice/name-card/name-card.component';
import { ProgressBarComponent } from './ss5_components_interaction/practice/progress-bar/progress-bar.component';
import { RatingBarComponentComponent } from './ss5_components_interaction/exercise/rating-bar-component/rating-bar-component.component';
import { CountdownTimerComponent } from './ss5_components_interaction/exercise/countdown-timer/countdown-timer.component';
import { TodoComponent } from './ss6_angular_form/practice/todo/todo.component';
import { RegisterComponent } from './ss6_angular_form/exercise/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponentComponent,
    CountdownTimerComponent,
    TodoComponent,
    RegisterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
