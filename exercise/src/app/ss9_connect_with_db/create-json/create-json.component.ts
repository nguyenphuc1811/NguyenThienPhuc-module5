import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../ss7_service_&_router/manager_product/product.service';
import {Category} from '../../ss7_service_&_router/manager_product/category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-json',
  templateUrl: './create-json.component.html',
  styleUrls: ['./create-json.component.css']
})
export class CreateJsonComponent implements OnInit {
  categories: Category[] = [];

  reactiveForm: FormGroup;

  constructor(private productService: ProductService, private router: Router) {
    this.productService.getCategory().subscribe(next => {
      this.categories = next;
    });
    this.reactiveForm = new FormGroup({
      id: new FormControl(''), name: new FormControl(''),
      price: new FormControl(''), description: new FormControl(''),
      category: new FormControl('')
    });
  }

  ngOnInit(): void {
  }


  submit() {
    if (this.reactiveForm.valid) {
      console.log(this.productService);
      this.productService.addProduct(this.reactiveForm.value).subscribe(next => {
        alert('them thanh cong');
        this.router.navigateByUrl('/products/products');
      });
    }
  }
}
