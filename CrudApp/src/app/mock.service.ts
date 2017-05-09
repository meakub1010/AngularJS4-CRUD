import { Injectable, OnInit } from '@angular/core';

import { employees } from './mock-data';
import { Employee } from './employee';

@Injectable()
export class MockService {
        // ngOnInit(): void {
        //     throw new Error('Method not implemented.');
        // }

        getEmployees(): Promise<Employee[]>{
            return Promise.resolve( employees);
        }

}