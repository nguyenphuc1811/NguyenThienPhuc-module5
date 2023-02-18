package com.codegym.exam_be.service;

import com.codegym.exam_be.model.Patient;

import java.util.List;

public interface IPatientService {
    List<Patient> searchDoctor(String name, int id);

    List<Patient> searchAll(String name);

    void deletePatient(int id);

    void addPatient(String medicalCode, String patientCode, String name, String startDay, String endDay, String reason, String solution, int doctorId);

    Patient findById(int id);

    void update(String medicalCode, String patientCode, String name, String startDay, String endDay, String reason, String solution, int doctorId, int id);
}
