import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number = -1;
  employee: Employee = new Employee();
  constructor(
    private act_route: ActivatedRoute,
    private empService: EmployeeService,
    
  ) { }

  ngOnInit(): void {
    this.id = this.act_route.snapshot.params['id'];
    this.empService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    })
  }

}
