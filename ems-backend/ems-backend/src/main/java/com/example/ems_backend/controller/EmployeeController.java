package com.example.ems_backend.controller;

import com.example.ems_backend.model.Employee;
import com.example.ems_backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController{
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/add")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }

    @GetMapping("/get/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable Long id){
        return employeeService.getEmployeeById(id);
    }

    @GetMapping("/get")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
    }
}