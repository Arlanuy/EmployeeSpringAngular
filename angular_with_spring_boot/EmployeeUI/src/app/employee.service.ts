import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url:string = "http://localhost:8080/api/v1/employees/";

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
  
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/employee/${id}`)
  }

  editEmployee(id: number, employee: Employee): Observable<Object> {
    return this.http.put(`${this.url}/employee/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.http.delete(`${this.url}/employee/${id}`);
  }
}

export class APIResponse {
  message: string = "";
  success:boolean= false;
}


