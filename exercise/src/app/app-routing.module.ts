import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './ss7_service_&_router/manager_product/product-list/product-list.component';
import {ProductCreateComponent} from './ss7_service_&_router/manager_product/product-create/product-create.component';
import {ProductEditComponent} from './ss7_service_&_router/manager_product/product-edit/product-edit.component';
import {NgModule} from '@angular/core';
import {DictionaryPageComponent} from './ss7_service_&_router/dictionary/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './ss7_service_&_router/dictionary/dictionary-detail/dictionary-detail.component';
import {ListJsonComponent} from './ss9_connect_with_db/list-json/list-json.component';
import {CreateJsonComponent} from './ss9_connect_with_db/create-json/create-json.component';
import {JsonEditComponent} from './ss9_connect_with_db/json-edit/json-edit.component';
import {DeleleJsonComponent} from './ss9_connect_with_db/delele-json/delele-json.component';
import {CategoryComponent} from './ss8_modules_&_di/category/category.component';


const routes: Routes = [
  {
    path: 'word',
    component: DictionaryPageComponent
  }
  , {
    path: 'word/:word',
    component: DictionaryDetailComponent
  },
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
  },
  {
    path: 'products/products',
    component: ListJsonComponent
  }, {
    path: 'products/create',
    component: CreateJsonComponent
  },
  {
    path: 'products/products/editJson/:id',
    component: JsonEditComponent
  }, {
    path: 'products/products/deleteJson/:id',
    component: DeleleJsonComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
