import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList:Array<Employee> = [];
  constructor(
    private empService:EmployeeService
  ) { }

  getAllEmployees(): void {
    this.empService.getAllEmployee().subscribe(
      (response)=> {
        console.log(response);
        this.employeeList = response;
      }
    )
  }

  editEmployee(emp:Employee) :void {
    console.log("Edit emp", emp)
  }

  deleteEmployee(emp:Employee) :void {
    console.log("Delete emp", emp)
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

}
