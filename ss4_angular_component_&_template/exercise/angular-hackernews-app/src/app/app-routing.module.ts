import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductCreateComponent} from './ss7_service_&_router/exercise/manager_product/product-create/product-create.component';
import {ProductListComponent} from './ss7_service_&_router/exercise/manager_product/product-list/product-list.component';
import {ProductEditComponent} from './ss7_service_&_router/exercise/manager_product/product-edit/product-edit.component';


const routes: Routes = [
  {
    path: 'product',
    component: ProductListComponent
  }, {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
