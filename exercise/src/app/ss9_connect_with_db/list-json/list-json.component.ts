import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../ss7_service_&_router/manager_product/product.service';
import {Product} from '../../ss7_service_&_router/manager_product/product';
import {Category} from '../../ss7_service_&_router/manager_product/category';


@Component({
  selector: 'app-list-json',
  templateUrl: './list-json.component.html',
  styleUrls: ['./list-json.component.css']
})
export class ListJsonComponent implements OnInit {
  products: Product[] = [];
  product: Product = {name: ''};
  categories: Category[];

  constructor(private productService: ProductService) {
    this.productService.getAllToServer().subscribe(products => {
      this.products = products;
    });
    this.productService.getCategory().subscribe(categories => {
      this.categories = categories;
    });
  }

  ngOnInit(): void {
  }

  delete(product: Product) {
    this.product = product;
  }

  searchProduct(category: string, value: string) {
    console.log(category);
    this.productService.searchProduct(parseInt(category), value).subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }
}
