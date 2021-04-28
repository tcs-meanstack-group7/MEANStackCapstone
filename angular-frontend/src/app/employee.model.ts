
export class Employee { // this class is use to map json data. 
    constructor(public empId:string,public password:string){}
}

export class EmployeeRequest{
    constructor(public productname:string,public quantity:number){}
}