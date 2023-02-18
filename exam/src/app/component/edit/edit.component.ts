import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Doctor} from "../../model/doctor";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientService} from "../../service/patient.service";
import {Patient} from "../../model/patient";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  patientForm: FormGroup;
  doctors: Doctor[];
  patient: Patient;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private patientService: PatientService) {
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
    }, [this.checkDate]);
    this.getDoctors();
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      this.patientService.findById(parseInt(id)).subscribe(patient => {
        this.patient = patient;
        this.patientForm.patchValue(this.patient)
      })
    })
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

  private checkDate(form: FormGroup) {
    const startDay = form.value.startDay;
    const endDay = form.value.endDay;
    return (new Date(startDay) > new Date(endDay)) ? {invalidDate: true} : null;
  }

  update() {
    if (this.patientForm.valid) {
      this.patientService.update(this.patientForm.value).subscribe();
      alert("Chỉnh sửa thành công");
      this.router.navigateByUrl("");
    }
  }
}
