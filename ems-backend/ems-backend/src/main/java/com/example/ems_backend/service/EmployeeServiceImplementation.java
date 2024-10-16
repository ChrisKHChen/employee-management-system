package com.example.ems_backend.service;

import com.example.ems_backend.model.Employee;
import com.example.ems_backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImplementation implements EmployeeService{
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee createEmployee(Employee employee){
        return null;
    }

    @Override
    public Optional<Employee> getEmployeeById(Long id){
        return Optional.empty();
    }

    @Override
    public List<Employee> getAllEmployees(){
        return List.of();
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee){
        return null;
    }

    @Override
    public void deleteEmployee(Long id){

    }
}
