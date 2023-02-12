import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import {FormsModule} from '@angular/forms';
import { FacilityAddComponent } from './facility/facility-add/facility-add.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { ListComponent } from './contract/list/list.component';
import { AddComponent } from './contract/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilityListComponent,
    FacilityEditComponent,
    FacilityAddComponent,
    CustomerComponent,
    CustomerEditComponent,
    CustomerAddComponent,
    ListComponent,
    AddComponent
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
