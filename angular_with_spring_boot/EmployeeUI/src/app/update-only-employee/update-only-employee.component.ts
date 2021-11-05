import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-only-employee',
  templateUrl: './update-only-employee.component.html',
  styleUrls: ['./update-only-employee.component.css']
})
export class UpdateOnlyEmployeeComponent implements OnInit {
  employeeForm:any;
  employee: Employee = new Employee();
  id: number = -1;
  constructor(
    
    private empService:EmployeeService,
    private router:Router,
    private act_route: ActivatedRoute
  ) { 
    this.employeeForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.id = this.act_route.snapshot.params['id'];
    this.empService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/employeeList']);
  }

  formSubmitUpdate(): void {
    console.log("value is " + this.employeeForm.value.name + this.employeeForm.value.email);
    this.employee = this.employeeForm.value;
    console.log("employee now is " + this.employee.name + " " + this.employee.email)
    this.empService.editEmployee(this.id, this.employee).subscribe(
      (response)=>{
        
        console.log("Response is " + response);
        this.goToEmployeeList();
      }, error => console.log("error at update is " + error)
    );
  }

 
  
}
