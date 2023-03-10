package com.codegym.exam_be.controller;

import com.codegym.exam_be.model.Doctor;
import com.codegym.exam_be.model.Patient;
import com.codegym.exam_be.service.IDoctorService;
import com.codegym.exam_be.service.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("")
@CrossOrigin("*")
public class PatientRestController {
    @Autowired
    private IDoctorService doctorService;
    @Autowired
    private IPatientService patientService;

    @GetMapping("/patient/{name}&{id}")
    public ResponseEntity<List<Patient>> searchPatient(@PathVariable("name") String name, @PathVariable("id") int id) {
        List<Patient> patientList;
        if (id == 0) {
            patientList = patientService.searchAll(name);
        } else {
            patientList = patientService.searchDoctor(name, id);
        }
        return new ResponseEntity<>(patientList, HttpStatus.OK);
    }

    @GetMapping("/doctor")
    public ResponseEntity<List<Doctor>> getDoctorList() {
        List<Doctor> doctorList = doctorService.doctorList();
        return new ResponseEntity<>(doctorList, HttpStatus.OK);
    }

    @DeleteMapping("/patient/delete/{id}")
    public ResponseEntity<?> deletePatient(@PathVariable("id") int id) {
        this.patientService.deletePatient(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/patient/add")
    public ResponseEntity<?> addPatient(@Validated @RequestBody Patient patient, BindingResult bindingResult) {
        patient.validate(patient, bindingResult);
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        patientService.addPatient(patient.getMedicalCode(), patient.getPatientCode(), patient.getName(), patient.getStartDay(), patient.getEndDay(), patient.getReason(), patient.getSolution(), patient.getDoctor().getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("patient/edit/{id}")
    public ResponseEntity<Patient> findById(@PathVariable int id) {
        Patient patient = patientService.findById(id);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    @PutMapping("patient/update")
    public ResponseEntity<?> updatePatient(@Validated @RequestBody Patient patient, BindingResult bindingResult) {
        patient.validate(patient, bindingResult);
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        patientService.update(patient.getMedicalCode(), patient.getPatientCode(), patient.getName(), patient.getStartDay(), patient.getEndDay(), patient.getReason(), patient.getSolution(), patient.getDoctor().getId(), patient.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
