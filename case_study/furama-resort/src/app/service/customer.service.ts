import {Injectable} from '@angular/core';
import {Customer} from "../model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [
    {
      id: 1,
      name: 'abc'
    },
    {
      id: 2,
      name: '123'
    }
  ]

  constructor() {
  }

  getAll(){
    return this.customerList;
  }
}
