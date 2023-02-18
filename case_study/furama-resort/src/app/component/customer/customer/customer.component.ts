import {Customer} from '../../../model/customer/customer';
import {Component, OnInit, Output} from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import {CustomerType} from '../../../model/customer/customer-type';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 @Output() customer: Customer;
  customers: Customer[];
  customerTypes: CustomerType[];

  constructor(private customerService: CustomerService) {
    this.customerService.getAllCustomer('', 0).subscribe(customer => {
      this.customers = customer;
    });
    this.customerService.getCustomerTypes().subscribe(data => {
      this.customerTypes = data;
    });
  }

  ngOnInit(): void {
  }

  search(value: string, value2: string) {
    console.log(value2);
    this.customerService.getAllCustomer(value, parseInt(value2)).subscribe(data => {
      this.customers = data;
    });
  }

  edit(customer: Customer) {
    this.customer = customer;
  }
}
