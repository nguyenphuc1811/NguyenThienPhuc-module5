import {Component, OnInit} from '@angular/core';
import {Product} from '../../ss7_service_&_router/manager_product/product';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../ss7_service_&_router/manager_product/category';
import {ProductService} from '../../ss7_service_&_router/manager_product/product.service';

@Component({
  selector: 'app-json-edit',
  templateUrl: './json-edit.component.html',
  styleUrls: ['./json-edit.component.css']
})
export class JsonEditComponent implements OnInit {
  product: Product;
  productForm?: FormGroup;
  categories: Category[] = [];


  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
    this.activatedRoute.paramMap.subscribe(next => {
      let id = next.get('id');
      if (id != null) {
        productService.finByIdJson(parseInt(id)).subscribe(next => {
          this.product = next;
          this.productForm.patchValue(this.product);
        });
      }
    });
  }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(next => {
      this.categories = next;
    });
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
  }

  public compareWith(object1: Category, object2: Category): boolean {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  edit() {
    this.productService.editProductJson(this.productForm.value).subscribe(next => {
      alert('chinh sua thanh cong');
    });
  }
}
