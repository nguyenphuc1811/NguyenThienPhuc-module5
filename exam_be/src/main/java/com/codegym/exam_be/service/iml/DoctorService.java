package com.codegym.exam_be.service.iml;

import com.codegym.exam_be.model.Doctor;
import com.codegym.exam_be.repository.DoctorRepository;
import com.codegym.exam_be.service.IDoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService implements IDoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    public List<Doctor> doctorList(){
        return doctorRepository.listDoctor();
    }
}
