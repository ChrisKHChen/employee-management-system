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

    // Create
    @Override
    public Employee createEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    // Read
    @Override
    public Optional<Employee> getEmployeeById(Long id){
        return employeeRepository.findById(id);
    }

    @Override
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    // Update
    @Override
    public Employee updateEmployee(Long id, Employee employee){
        if (employeeRepository.existsById(id)) {
            Optional<Employee> optionalEmployee = employeeRepository.findById(id);
            if (optionalEmployee.isPresent()){
                Employee existingEmployee = optionalEmployee.get();
                existingEmployee.setFirstName(employee.getFirstName());
                existingEmployee.setMiddleName(employee.getMiddleName());
                existingEmployee.setLastName(employee.getLastName());
                existingEmployee.setGender(employee.getGender());
                existingEmployee.setDateOfBirth(employee.getDateOfBirth());
                existingEmployee.setEmail(employee.getEmail());
                existingEmployee.setPhoneNumber(employee.getPhoneNumber());
                existingEmployee.setCountry(employee.getCountry());
                existingEmployee.setPosition(employee.getPosition());
                existingEmployee.setDepartment(employee.getDepartment());
                existingEmployee.setHireDate(employee.getHireDate());
                existingEmployee.setContractEndDate(employee.getContractEndDate());
                existingEmployee.setSalary(employee.getSalary());
                return employeeRepository.save(existingEmployee);
            }else{
                return null;
            }
        }else{
            return null;
        }
    }

    // Delete
    @Override
    public void deleteEmployee(Long id){
        employeeRepository.deleteById(id);
    }
}