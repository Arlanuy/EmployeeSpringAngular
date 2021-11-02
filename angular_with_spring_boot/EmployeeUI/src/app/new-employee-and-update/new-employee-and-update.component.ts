import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-new-employee-and-update',
  templateUrl: './new-employee-and-update.component.html',
  styleUrls: ['./new-employee-and-update.component.css']
})
export class NewEmployeeAndUpdateComponent implements OnInit {

  employeeForm:any;
  constructor( 
    private empService:EmployeeService
  ){
    this.employeeForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
    })

    

  }

  ngOnInit(): void {
  }

  formSubmit(): void {
    console.log(this.employeeForm.value);
    this.empService.saveEmployee(this.employeeForm.value).subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }


}
