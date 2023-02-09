import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
        let id = next.get('id');
        if (id != null) {
          this.product = productService.findById(parseInt(id));
          this.productForm.patchValue(this.product);
        }
      }, error => {
      },
      () => {
      });
  }

  ngOnInit(): void {
  }

  edit() {
    this.product = this.productForm.value;
    console.log(this.product);
    this.productService.editProduct(this.product);
    this.router.navigateByUrl('/product');
  }
}
