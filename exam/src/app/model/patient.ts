import {Doctor} from "./doctor";

export interface Patient {
  id?: number;
  medicalCode?: string;
  patientCode?: string;
  name?: string;
  startDay?: string;
  endDay?: string;
  reason?: string;
  solution?: string;
  doctor?: Doctor;
}
