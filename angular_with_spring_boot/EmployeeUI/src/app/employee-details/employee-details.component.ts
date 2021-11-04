import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number = -1;
  employee: Employee = new Employee();
  constructor(
    private act_route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.act_route.snapshot.params['id'];
  }

}
