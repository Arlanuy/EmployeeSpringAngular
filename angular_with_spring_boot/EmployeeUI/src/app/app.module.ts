import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewEmployeeAndUpdateComponent } from './new-employee-and-update/new-employee-and-update.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateOnlyEmployeeComponent } from './update-only-employee/update-only-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEmployeeAndUpdateComponent,
    EmployeeListComponent,
    UpdateOnlyEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
