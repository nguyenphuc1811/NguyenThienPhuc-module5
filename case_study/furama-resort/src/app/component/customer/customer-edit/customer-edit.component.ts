import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer/customer';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer;

  constructor() {
  }

  ngOnInit(): void {
  }

}
