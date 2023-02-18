import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerComponent} from './component/customer/customer/customer.component';
import {CustomerEditComponent} from './component/customer/customer-edit/customer-edit.component';
import {CustomerAddComponent} from './component/customer/customer-add/customer-add.component';
import {FacilityListComponent} from './component/facility/facility-list/facility-list.component';
import {FacilityAddComponent} from './component/facility/facility-add/facility-add.component';


const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent
  }, {
    path: 'customer/:id',
    component: CustomerEditComponent
  }, {
    path: 'customer/customer/add',
    component: CustomerAddComponent
  }, {
    path: 'facility',
    component: FacilityListComponent
  }, {
    path: 'facility/add',
    component: FacilityAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
