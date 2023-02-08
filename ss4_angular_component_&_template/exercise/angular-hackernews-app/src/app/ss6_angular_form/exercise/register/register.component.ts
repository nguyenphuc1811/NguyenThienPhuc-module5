import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../Customer';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customerForm: FormGroup;

  constructor() {
    this.customerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      passwordGr: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
        confirm: new FormControl('')
      },[this.validatePassword]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.max(100), Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.pattern(/^\+84\d{9,10}$/)])
    });
  }

  ngOnInit(): void {
  }

  createCustomer() {
    console.log(this.customerForm);
  }

  private validatePassword(control: AbstractControl) {
    let password = control.value;
    if (password.password !== password.confirm) {
      return {'invalidPassword': true};
    }
    return null;
  }
}

