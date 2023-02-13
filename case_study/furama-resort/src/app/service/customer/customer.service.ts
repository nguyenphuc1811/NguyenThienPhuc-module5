import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer/customer';
import {HttpClient} from '@angular/common/http';
import {CustomerType} from '../../model/customer/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customer');
  }

  getCustomerTypes(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>('http://localhost:3000/customerType');
  }

  deleteCustomer(id: number) {
    return this.httpClient.delete('http://localhost:3000/customer/' + id);
  }

  createCustomer(customer: Customer) {
    return this.httpClient.post('http://localhost:3000/customer/', customer);
  }
}
