package com.codegym.exam_be.repository;

import com.codegym.exam_be.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
    @Query(value = "select * from `doctor`", nativeQuery = true)
    List<Doctor> listDoctor();
}
