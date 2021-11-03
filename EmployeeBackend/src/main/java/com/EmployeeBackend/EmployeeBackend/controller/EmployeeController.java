package com.EmployeeBackend.EmployeeBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.EmployeeBackend.EmployeeBackend.model.APIResponse;
import com.EmployeeBackend.EmployeeBackend.model.Employee;
import com.EmployeeBackend.EmployeeBackend.repository.EmployeeRepository;

@RestController

@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
	@Autowired
	private EmployeeRepository empRepository;
	
	@GetMapping("/helloWord")
	public String helloWord() {
		return "hello world";
	}
	
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
	
}
