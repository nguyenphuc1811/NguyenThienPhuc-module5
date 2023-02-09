import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    customerType: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    address: new FormControl(),
    email: new FormControl()
  })

  constructor() {
  }

  ngOnInit(): void {
  }

}
