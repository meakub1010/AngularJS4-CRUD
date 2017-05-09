import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { MockService } from "./mock.service";
import { Employee } from './employee';



@Component({
    selector: 'add-new',
    templateUrl:'./add.component.html',
    providers:[MockService]
})

export class AddNewEmployeeComponent{
    
    constructor(private dataService: MockService, private router: Router){

    }

    model = new Employee('Ehan','Doctor', 99, 99)

    submitted = false;
    onSubmit(emplForm: any){
        if (emplForm.valid){
            this.submitted = true; 
            this.addNewEmployee()
            console.log(this.model.name);
        }
        else{
            console.log('Invalid form');
        }
    }
    newEmployee(){
        this.model =  new Employee('','', 0, 0); 
    }

    addNewEmployee(){
        this.dataService.create(this.model).then(employee => {console.log('Employee added: '+ JSON.stringify(employee)); this.router.navigate(['/list-employees']);});

    }

    get diagnostic() { return JSON.stringify(this.model); }
}
