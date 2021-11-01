import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEmployeeAndUpdateComponent } from './new-employee-and-update/new-employee-and-update.component';

const routes: Routes = [
  {
    path:'saveEmployee',
    component: NewEmployeeAndUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
