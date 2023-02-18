import {Component, OnInit} from '@angular/core';
import {Patient} from "../../model/patient";
import {PatientService} from "../../service/patient.service";
import {Doctor} from "../../model/doctor";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  patients: Patient[];
  doctors: Doctor[]
  patient: Patient;
  patientCode: string = "";

  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.getDoctors();
    this.search("", "0");
  }

  getDoctors() {
    this.patientService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
    })
  }

  search(name: string, id: string) {
    this.patientService.searchPatientList(name, parseInt(id)).subscribe(patients => {
      this.patients = patients;
    })
  }

  deleteModal(patient: Patient) {
    this.patient = patient;
    this.patientCode = patient.patientCode;
  }

  deleteConfirm(id: number) {
    this.patientService.deletePatient(id).subscribe();
    this.search("", "0");
  }
}
