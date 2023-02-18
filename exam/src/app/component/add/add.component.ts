import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../../service/patient.service";
import {Doctor} from "../../model/doctor";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  patientForm: FormGroup;
  doctors: Doctor[];

  constructor(private router: Router, private patientService: PatientService) {
    this.patientForm = new FormGroup({
      id: new FormControl(''),
      medicalCode: new FormControl('', [Validators.required]),
      patientCode: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.pattern('\\D+')]),
      startDay: new FormControl('', [Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]),
      endDay: new FormControl('', [Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]),
      reason: new FormControl('', [Validators.required]),
      solution: new FormControl('', [Validators.required]),
      doctor: new FormControl('', [Validators.required])
    },[this.checkDate]);
    this.getDoctors();
  }

  ngOnInit(): void {
  }

  getDoctors() {
    this.patientService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
    })
  }


  compareFn(item1: any, item2: any) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }

  add() {
    if (this.patientForm.valid) {
      this.patientService.addPatient(this.patientForm.value).subscribe();
      alert("Thêm mới thành công");
      this.router.navigateByUrl('');
    }
  }

  private checkDate(form : FormGroup) {
    const startDay = form.value.startDay;
    const endDay = form.value.endDay;
    return (new Date(startDay) > new Date(endDay)) ? {invalidDate: true} : null;
  }
}
