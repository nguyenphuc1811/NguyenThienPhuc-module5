import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './ss7_service_&_router/manager_product/product-list/product-list.component';
import { ProductCreateComponent } from './ss7_service_&_router/manager_product/product-create/product-create.component';
import { ProductEditComponent } from './ss7_service_&_router/manager_product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './ss7_service_&_router/manager_product/product-delete/product-delete.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
