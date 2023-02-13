import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {FacilityListComponent} from './component/facility/facility-list/facility-list.component';
import {FacilityEditComponent} from './component/facility/facility-edit/facility-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FacilityAddComponent} from './component/facility/facility-add/facility-add.component';
import {CustomerComponent} from './component/customer/customer/customer.component';
import {CustomerEditComponent} from './component/customer/customer-edit/customer-edit.component';
import {CustomerAddComponent} from './component/customer/customer-add/customer-add.component';
import {ListComponent} from './component/contract/list/list.component';
import {AddComponent} from './component/contract/add/add.component';
import {HttpClientModule} from '@angular/common/http';

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
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
