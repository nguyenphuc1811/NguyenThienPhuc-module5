package com.codegym.exam_be.repository;

import com.codegym.exam_be.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface PatientRepository extends JpaRepository<Patient, Integer> {
    @Query(value = "select * from `patient` where name like %:name% and doctor_id = :id", nativeQuery = true)
    List<Patient> searchDoctor(@Param("name") String name, @Param("id") int id);

    @Query(value = "select * from `patient` where name like %:name%", nativeQuery = true)
    List<Patient> searchAll(@Param("name") String name);

    @Modifying
    @Query(value = "delete from `patient` where id = :id", nativeQuery = true)
    void deletePatient(@Param("id") int id);

    @Modifying
    @Query(value = "insert into `patient` (medical_code,patient_code,name,start_day,end_day,reason,solution,doctor_id) values (:medicalCode,:patientCode,:name,:startDay,:endDay,:reason,:solution,:doctorId)", nativeQuery = true)
    void addPatient(@Param("medicalCode") String medicalCode, @Param("patientCode") String patientCode, @Param("name") String name, @Param("startDay") String startDay, @Param("endDay") String endDay, @Param("reason") String reason, @Param("solution") String solution, @Param("doctorId") int doctorId);

    @Query(value = "select * from `patient` where id = :id", nativeQuery = true)
    Patient findById(@Param("id") int id);

    @Modifying
    @Query(value = "update `patient` set medical_code = :medicalCode,patient_code = :patientCode,name = :name,start_day= :startDay ,end_day = :endDay,reason = :reason,solution = :solution,doctor_id = :doctorId where id = :id", nativeQuery = true)
    void update(@Param("medicalCode") String medicalCode, @Param("patientCode") String patientCode, @Param("name") String name, @Param("startDay") String startDay, @Param("endDay") String endDay, @Param("reason") String reason, @Param("solution") String solution, @Param("doctorId") int doctorId, @Param("id") int id);
}
