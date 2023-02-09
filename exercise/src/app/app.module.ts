import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './ss7_service_&_router/manager_product/product-list/product-list.component';
import { ProductCreateComponent } from './ss7_service_&_router/manager_product/product-create/product-create.component';
import { ProductEditComponent } from './ss7_service_&_router/manager_product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './ss7_service_&_router/manager_product/product-delete/product-delete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DictionaryDetailComponent } from './ss7_service_&_router/dictionary/dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './ss7_service_&_router/dictionary/dictionary-page/dictionary-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    DictionaryDetailComponent,
    DictionaryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
