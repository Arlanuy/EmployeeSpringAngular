import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url:string = environment.serverUrl;

  constructor(
    private http:HttpClient
   ) { }

   public getHttpTraces(): Observable<Object> {
     return this.http.get(`${this.url}/httptrace`);
   }

  saveEmployee(payload: Employee): Observable<APIResponse> {
    console.log("Request is sent to ", this.url);
    return this.http.post<APIResponse>(this.url+"saveEmployee", payload);
  }

  getAllEmployee() :Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + "employeeList")
  }
  
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/${id}`)
  }

  editEmployee(id: number, employee: Employee): Observable<Object> {
   // const headers = new Headers();
    //headers.append('Access-Control-Allow-Headers', 'Content-Type');
    //headers.append('Access-Control-Allow-Methods', 'PUT');
    //headers.append('Access-Control-Allow-Origin', '*');
    return this.http.put(`${this.url}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

export class APIResponse {
  message: string = "";
  success:boolean= false;
}


