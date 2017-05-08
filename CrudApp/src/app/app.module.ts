import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RouterModule, Routes }   from '@angular/router';

import { AddNewEmployeeComponent } from './add.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'add',  component: AddNewEmployeeComponent },
  { path: 'list-employees',  component: EmployeesComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, AddNewEmployeeComponent, EmployeesComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
