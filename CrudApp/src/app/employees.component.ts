import { Component, OnInit } from '@angular/core';
import { MockService } from "./mock.service";
import { Employee } from "./employee";

@Component({
    selector: 'list-employee',
    templateUrl:'./employees.component.html',
    providers:[MockService]
})

export class EmployeesComponent implements OnInit {
    
    ngOnInit(): void {
        this.getEmployees();
    }

    constructor(private dataService: MockService){

    }

    employees: Employee[];

    getEmployees(): void{
        this.dataService.getEmployees().then(employees => this.employees = employees);   
    }
}