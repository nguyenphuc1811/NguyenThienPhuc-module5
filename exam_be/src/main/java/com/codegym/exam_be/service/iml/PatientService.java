package com.codegym.exam_be.service.iml;

import com.codegym.exam_be.model.Patient;
import com.codegym.exam_be.repository.PatientRepository;
import com.codegym.exam_be.service.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService implements IPatientService {
    @Autowired
    private PatientRepository patientRepository;

    @Override
    public List<Patient> searchDoctor(String name, int id) {
        return patientRepository.searchDoctor(name, id);
    }

    @Override
    public List<Patient> searchAll(String name) {
        return patientRepository.searchAll(name);
    }

    @Override
    public void deletePatient(int id) {
        patientRepository.deletePatient(id);
    }

    @Override
    public void addPatient(String medicalCode, String patientCode, String name, String startDay, String endDay, String reason, String solution, int doctorId) {
        patientRepository.addPatient(medicalCode, patientCode, name, startDay, endDay, reason, solution, doctorId);
    }

    @Override
    public Patient findById(int id){
        return patientRepository.findById(id);
    }
    @Override
    public void update(String medicalCode, String patientCode, String name, String startDay, String endDay, String reason, String solution, int doctorId,int id){
        patientRepository.update(medicalCode, patientCode, name, startDay, endDay, reason, solution, doctorId,id);
    }
}
