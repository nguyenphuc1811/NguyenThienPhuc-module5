import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer/customer.service';
import {CustomerType} from '../../../model/customer/customer-type';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer;
  abc: true;
  reactiveForm: FormGroup;
  customerTypes: CustomerType[];

  constructor(private customerService: CustomerService,private activatedRote: ActivatedRoute) {

    this.reactiveForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      customerType: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]),
      phoneNumber: new FormControl('', [Validators.pattern('(090||091||8490||8491)[0-9]{7,8}')])
    });
    this.customerService.getCustomerTypes().subscribe(data => {
      this.customerTypes = data;
    });
    this.reactiveForm.patchValue(this.customer);

  }

  ngOnInit(): void {
  }

  submit() {

  }
  public compareWith(object1: CustomerType, object2: CustomerType): boolean {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }
}
