package com.example.ems_backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

import java.util.Date;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Employee{
    // Unique Identifiers
    @Id
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "employee_id", nullable = false, unique = true)
    private String employeeId;

    // Personal Information
    @Column(name = "first_name", nullable = false)
    private String firstName;
    @Column(name = "middle_name")
    private String middleName;
    @Column(name = "last_name", nullable = false)
    private String lastName;
    @Column(name = "gender")
    private String gender;
    @Column(name = "date_of_birth", nullable = false)
    private Date dateOfBirth;

    // Contact Information
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;
    @Column(name = "country", nullable = false)
    private String country;

    // Job Details
    @Column(name = "position", nullable = false)
    private String position;
    @Column(name = "department", nullable = false)
    private String department;
    @Column(name = "hire_date", nullable = false)
    private Date hireDate;
    @Column(name = "contract_end_date")
    private Date contractEndDate;
    @Column(name = "salary", nullable = false)
    private Double salary;
}