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
import { ProductCreateComponent } from './ss7_service_&_router/exercise/manager_product/product-create/product-create.component';
import { ProductListComponent } from './ss7_service_&_router/exercise/manager_product/product-list/product-list.component';
import { DictionayPageComponent } from './ss7_service_&_router/exercise/lookup_dictionary/dictionay-page/dictionay-page.component';
import { DictionaryDetailComponent } from './ss7_service_&_router/exercise/lookup_dictionary/dictionary-detail/dictionary-detail.component';
import { ProductEditComponent } from './ss7_service_&_router/exercise/manager_product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './ss7_service_&_router/exercise/manager_product/product-delete/product-delete.component';

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
    RegisterComponent,
    ProductCreateComponent,
    ProductListComponent,
    DictionayPageComponent,
    DictionaryDetailComponent,
    ProductEditComponent,
    ProductDeleteComponent
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
