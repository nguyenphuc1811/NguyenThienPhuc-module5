import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../ss7_service_&_router/manager_product/product.service';
import {Category} from '../../ss7_service_&_router/manager_product/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[];

  constructor(private service: ProductService) {
    this.service.getCategory().subscribe(next => {
      this.categories = next;
      console.log(this.categories);
    });
  }

  ngOnInit(): void {
  }

}
