import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerComponent} from "./customer/customer/customer.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {CustomerAddComponent} from "./customer/customer-add/customer-add.component";


const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent
  }, {
    path: 'customer/:id',
    component: CustomerEditComponent
  }, {
    path: 'customer/add',
    component: CustomerAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
