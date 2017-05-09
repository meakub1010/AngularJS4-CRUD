import { Component } from '@angular/core';
import { Employee } from './employee';


@Component({
    selector: 'add-new',
    templateUrl:'./add.component.html'

})

export class AddNewEmployeeComponent{
    
    model = new Employee('Ehan','Doctor', 1, 500000)

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
        //console.log('sdddssd');
    }

    addNewEmployee(){
        
    }

    get diagnostic() { return JSON.stringify(this.model); }
}
