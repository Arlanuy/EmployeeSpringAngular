import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList:Array<Employee> = [];
  constructor(
    private empService:EmployeeService,
    private router: Router
  ) { }

  getAllEmployees(): void {
    this.empService.getAllEmployee().subscribe(
      (response)=> {
        console.log(response);
        this.employeeList = response;
      }
    )
  }

  editEmployee(id: number) :void {
    console.log("Edit emp at id", id)
    this.router.navigate(["update-only-employee", id])
  }

  deleteEmployee(id: number) :void {
    console.log("Delete emp", id)
    this.empService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getAllEmployees();
    })
  }

  viewEmployee(id: number) {
    this.router.navigate(["employee-details", id])
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

}
