import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Patient} from "../model/patient";
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../model/doctor";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) {
  }

  searchPatientList(name: string, id: number): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>("http://localhost:8080/patient/" + name + '&' + id);
  }

  getDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>("http://localhost:8080/doctor");
  }

  deletePatient(id: number) {
    return this.httpClient.delete("http://localhost:8080/patient/delete/" + id);
  }

  addPatient(patient: Patient) {
    return this.httpClient.post("http://localhost:8080/patient/add", patient);
  }

  findById(id: number) {
    return this.httpClient.get<Patient>('http://localhost:8080/patient/edit/' + id);
  }
  update(patient: Patient) {
    return this.httpClient.put('http://localhost:8080/patient/update', patient);
  }
}
