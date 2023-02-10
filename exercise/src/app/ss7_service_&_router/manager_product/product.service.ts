import {Injectable} from '@angular/core';
import {Product} from './product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor(private httpClient: HttpClient) {
  }

  finByIdJson(id: number) {
    return this.httpClient.get('http://localhost:3000/products/' + id);
  }

  getAllToServer(): Observable<Product[]> {
    return this.httpClient.get<(Product[])>('http://localhost:3000/products');
  }

  getCategory(): Observable<Category[]> {
    return this.httpClient.get<(Category[])>('http://localhost:3000/categories');
  }

  addProduct(event: any) {
    return this.httpClient.post('http://localhost:3000/products', event);
  }

  deleteProductJson(event: any) {
    return this.httpClient.delete('http://localhost:3000/products', event);
  }

  getAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  findById(id: number) {
    for (let product of this.products) {
      if (product.id === id) {
        return product;
      }
    }
    return null;
  }

  editProduct(product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === product.id) {
        this.products[i] = product;
      }
    }
  }

  deleteProduct(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1);
      }
    }
  }

  editProductJson(product: Product) {
    return this.httpClient.put('http://localhost:3000/products/' + product.id, product);
  }
}
