import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEmployeeAndUpdateComponent } from './new-employee-and-update/new-employee-and-update.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path:'saveEmployee',
    component: NewEmployeeAndUpdateComponent
  },
  {
    path:"",
    component:EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
