import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../../model/customer/customer-type';
import {CustomerService} from '../../../service/customer/customer.service';
import {Customer} from '../../../model/customer/customer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  reactiveForm: FormGroup;
  customerTypes: CustomerType[];
  customer: Customer;
  abc = true;

  constructor(private customerService: CustomerService) {
    this.reactiveForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [this.nameValidator]),
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
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.reactiveForm.valid) {
      this.customer = this.reactiveForm.value;
      console.log(this.customer);
      this.customerService.createCustomer(this.customer).subscribe();
    }
  }

  private nameValidator(control: AbstractControl) {
    let name = control.value;
    let array = name.split(' ');
    for (let i = 0; i < array.length; i++) {
      if (!array[i].charAt(0).match('[A-Z]')) {
        return {'upCase': true};
      }
    }
    return null;
  }
}
