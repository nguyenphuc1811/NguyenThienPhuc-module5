import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  @Input()
  product: Product = {name: ''};

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  delete(id: number) {
    if (id != null) {
      this.productService.deleteProduct(id);
    }
  }
}
