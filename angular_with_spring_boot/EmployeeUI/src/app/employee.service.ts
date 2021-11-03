import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url:string = "http://localhost:8080/";

  constructor(
    private http:HttpClient
   ) { }

  saveEmployee(payload: Employee): Observable<APIResponse> {
    console.log("Request is sent to ", this.url);
    return this.http.post<APIResponse>(this.url+"saveEmployee", payload);
  }

  getAllEmployee() :Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + "employeeList")
  }
}

export class APIResponse {
  message: string = "";
  success:boolean= false;
}

export class Employee{
  name: string= "";
  email: string= "";
}

