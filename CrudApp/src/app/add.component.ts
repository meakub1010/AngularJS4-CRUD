import { Component } from '@angular/core';
import { Employee } from './employee';


@Component({
    selector: 'add-new',
    templateUrl:'./add.component.html'

})

export class AddNewEmployeeComponent{
    
    model = new Employee(0,'Ehan','Doctor',1,500000)

    submitted = false;
    onSubmit(){
        this.submitted = true; 
         console.log('submitted');
        }
    newEmployee(){
        this.model =  new Employee(0,'','',0,0); 
        console.log('sdddssd');
    }

    get diagnostic() { return JSON.stringify(this.model); }
}
