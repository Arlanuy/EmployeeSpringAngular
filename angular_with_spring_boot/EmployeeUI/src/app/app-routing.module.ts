import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEmployeeAndUpdateComponent } from './new-employee-and-update/new-employee-and-update.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateOnlyEmployeeComponent } from './update-only-employee/update-only-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {
    path:'saveEmployee',
    component: NewEmployeeAndUpdateComponent
  },
  {
    path:"employeeList",
    component:EmployeeListComponent
  },
  {
    path: "", redirectTo: 'employeeList',
    pathMatch:'full'
  },
  {
    path: "update-only-employee/:id",
    component:UpdateOnlyEmployeeComponent
  },
  {
    path: "employee-details/:id",
    component:EmployeeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
