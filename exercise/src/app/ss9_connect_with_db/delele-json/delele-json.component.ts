import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../ss7_service_&_router/manager_product/product';
import {ProductService} from '../../ss7_service_&_router/manager_product/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delele-json',
  templateUrl: './delele-json.component.html',
  styleUrls: ['./delele-json.component.css']
})
export class DeleleJsonComponent implements OnInit {
  @Input()
  product: Product;
  products: Product[];

  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {
  }


  deleteProduct(id: number) {
    console.log(id);
    this.productService.deleteProductJson(id).subscribe(
      next => {
        this.router.navigateByUrl('/products/products');
      }
    );

  }
}
