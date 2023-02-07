import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {FormsModule} from '@angular/forms';
import { LikeComponent } from './like/like.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NameCardComponent } from './ss5_components_interaction/practice/name-card/name-card.component';
import { ProgressBarComponent } from './ss5_components_interaction/practice/progress-bar/progress-bar.component';
import { RatingBarComponentComponent } from './ss5_components_interaction/exercise/rating-bar-component/rating-bar-component.component';
import { CountdownTimerComponent } from './ss5_components_interaction/exercise/countdown-timer/countdown-timer.component';

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
    CountdownTimerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
