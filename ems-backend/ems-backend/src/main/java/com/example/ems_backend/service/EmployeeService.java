package com.example.ems_backend.service;

import com.example.ems_backend.model.Employee;
import com.example.ems_backend.repository.EmployeeRepository;

import java.util.List;
import java.util.Optional;

public interface EmployeeService{
    // Create
    public Employee createEmployee(Employee employee);

    // Read
    public Optional<Employee> getEmployeeById(Long id);
    public List<Employee> getAllEmployees();

    // Update
    public Employee updateEmployee(Long id, Employee employee);

    // Delete
    public void deleteEmployee(Long id);
}
