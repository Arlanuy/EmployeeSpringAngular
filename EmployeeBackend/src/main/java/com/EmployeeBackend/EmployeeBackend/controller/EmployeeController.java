package com.EmployeeBackend.EmployeeBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EmployeeBackend.EmployeeBackend.exception.ResourceNotFoundException;
import com.EmployeeBackend.EmployeeBackend.model.APIResponse;
import com.EmployeeBackend.EmployeeBackend.model.Employee;
import com.EmployeeBackend.EmployeeBackend.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/v1/employees/")
@CrossOrigin(origins = "http://localhost:4200", exposedHeaders="Access-Control-Allow-Origin")
public class EmployeeController {
	@Autowired
	private EmployeeRepository empRepository;
	
	@GetMapping("/helloWord")
	public String helloWord() {
		return "hello world";
	}
	//create employee
	
	@PostMapping("/saveEmployee")
	public APIResponse saveEmployee(@RequestBody Employee emp) {
		APIResponse response;
		
		try {
			this.empRepository.save(emp);
			response = new APIResponse("Employee save successfully.", true);
		}catch(Exception e) {
			response = new APIResponse("Employee not saved.", false);
		}
		
		return response;
	}
	
	@GetMapping("/employeeList")
	public Iterable<Employee> getAllEmployee() {
		return this.empRepository.findAll();
	}
	
	//get employee by id
	
	//@GetMapping("/employee/{id}")
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Integer id) {
		Employee employee = this.empRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee unexistent with given id " + id));
		return ResponseEntity.ok(employee);
	}
	
	//update employee
	
	//@PutMapping("/employee/{id}")
	@PutMapping("/{id}")
	@CrossOrigin(origins = "http://localhost:4200", exposedHeaders="Access-Control-Allow-Origin")
	public APIResponse editEmployee(@PathVariable Integer id, @RequestBody Employee employeeDetails) {
		Employee employee = this.empRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee unexistent with given id " + id));
		System.out.println("The details got are " + employeeDetails.getName() + " and " + employeeDetails.getEmail());
		employee.setName(employeeDetails.getName());
		employee.setEmail(employeeDetails.getEmail());
		APIResponse response;

		try {
			this.empRepository.save(employee);
			response = new APIResponse("Employee updated successfully.", true);
		}catch(Exception e) {
			 response = new APIResponse("Employee not updated." + e.getMessage(), false);
		}
		System.out.println("response is " + response.getMessage());
		return response;
	}   
	
	//delete employee
	//@DeleteMapping("/employee/{id}")
	@DeleteMapping("/{id}")
	public APIResponse deleteEmployee(@PathVariable Integer id) {
		Employee employee = this.empRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee unexistent with given id " + id));
		APIResponse response;
		try {
			this.empRepository.delete(employee);
			response = new APIResponse("Employee deleted successfully.", true);
		}catch(Exception e) {
			 response = new APIResponse("Employee not deleted." + e.getMessage(), false);
		}
		return response;
		
	}
	
	
}
