import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './ss7_service_&_router/manager_product/product-list/product-list.component';
import {ProductCreateComponent} from './ss7_service_&_router/manager_product/product-create/product-create.component';
import {ProductEditComponent} from './ss7_service_&_router/manager_product/product-edit/product-edit.component';
import {ProductDeleteComponent} from './ss7_service_&_router/manager_product/product-delete/product-delete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DictionaryDetailComponent} from './ss7_service_&_router/dictionary/dictionary-detail/dictionary-detail.component';
import {DictionaryPageComponent} from './ss7_service_&_router/dictionary/dictionary-page/dictionary-page.component';
import {HttpClientModule} from '@angular/common/http';
import {ListJsonComponent} from './ss7_service_&_router/manager_product/ss9_connect_with_db/list-json/list-json.component';
import { CreateJsonComponent } from './ss7_service_&_router/manager_product/ss9_connect_with_db/create-json/create-json.component';
import { JsonEditComponent } from './ss7_service_&_router/manager_product/ss9_connect_with_db/json-edit/json-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    DictionaryDetailComponent,
    DictionaryPageComponent,
    ListJsonComponent,
    CreateJsonComponent,
    JsonEditComponent,
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
