import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer/customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
