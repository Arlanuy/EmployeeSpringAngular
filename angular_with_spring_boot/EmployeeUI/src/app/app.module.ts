import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewEmployeeAndUpdateComponent } from './new-employee-and-update/new-employee-and-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEmployeeAndUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
