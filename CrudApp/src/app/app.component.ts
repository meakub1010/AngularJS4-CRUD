import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles:[`
          body{ text-align:center; width:100%; } 
          .myContainer{ width:100%; height:200px;} 
          .operaiton{ 
              background: grey; width: 200px; 
              padding: 50px; float: left; 
              text-align: center; 
              border:solid 5px darkgreen; 
              margin: 3px; font-size:20px; font-weight:bold; }
          .operaiton:hover {
              background-color: #EEE;
              cursor: pointer;
              color: #607d8b;
              }
           `]
})
export class AppComponent  { 
    constructor(
        private  router: Router,
    ){}

    title = 'Welocome to AngularJS 4 CRUD operation App !!!'; 

    gotoAddNewEmployee():void{
        this.router.navigate(['/add']);
    }

     gotoAllEmployees():void{
        this.router.navigate(['/list-employees']);
    }
}
