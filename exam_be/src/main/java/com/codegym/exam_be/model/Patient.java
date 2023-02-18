package com.codegym.exam_be.model;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
public class Patient implements Validator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank
    private String medicalCode;
    @NotBlank
    private String patientCode;
    @Pattern(regexp = "\\D+")
    private String name;
    @Column(columnDefinition = "date")
    private String startDay;
    @Column(columnDefinition = "date")
    private String endDay;
    @NotBlank
    private String reason;
    @NotBlank
    private String solution;
    @ManyToOne
    @NotBlank
    private Doctor doctor;

    public Patient() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMedicalCode() {
        return medicalCode;
    }

    public void setMedicalCode(String medicalCode) {
        this.medicalCode = medicalCode;
    }

    public String getPatientCode() {
        return patientCode;
    }

    public void setPatientCode(String patientCode) {
        this.patientCode = patientCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStartDay() {
        return startDay;
    }

    public void setStartDay(String startDay) {
        this.startDay = startDay;
    }

    public String getEndDay() {
        return endDay;
    }

    public void setEndDay(String endDay) {
        this.endDay = endDay;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getSolution() {
        return solution;
    }

    public void setSolution(String solution) {
        this.solution = solution;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        Patient patient = (Patient) target;
        try {
            Date startDay = new SimpleDateFormat("yyyy-MM-dd").parse(patient.startDay);
            Date endDay = new SimpleDateFormat("yyyy-MM-dd").parse(patient.endDay);
            if (startDay.compareTo(endDay) > 0) {
                errors.rejectValue("endDay", "endDay", "Ngày xuất viện > ngày nhập");
            }
        } catch (ParseException e) {
            errors.rejectValue("endDay", "endDay", "Không đúng đình dạng");
            errors.rejectValue("startDay", "startDay", "Không đúng đình dạng");
        }
    }
}
