export class Employee{
    constructor(
        public id: number,
        public name: string,
        public title: string,
        public age?: number,
        public salary?: number
    ){ }

}