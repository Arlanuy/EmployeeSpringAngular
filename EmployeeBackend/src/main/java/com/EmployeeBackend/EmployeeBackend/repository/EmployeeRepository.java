package com.EmployeeBackend.EmployeeBackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.EmployeeBackend.EmployeeBackend.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Integer>{

}
