import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../product.service';
import {Product} from '../../product';


@Component({
  selector: 'app-list-json',
  templateUrl: './list-json.component.html',
  styleUrls: ['./list-json.component.css']
})
export class ListJsonComponent implements OnInit {
  products: Product[] = [];
  product: Product;

  constructor(private productService: ProductService) {
    this.productService.getAllToServer().subscribe(products => {
      console.log(products);
      this.products = products;
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

  editProduct(product: Product) {
    this.productService.editProductJson(product);
  }
}
