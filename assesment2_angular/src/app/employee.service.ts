import { Injectable } from '@angular/core';
import{Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  emplist:Employee[]=[
    {id:1,name:"nishkarsh",gender:"male",salary:55544, dob:new Date('1996-01-17')},
    {id:2,name:"adiba",gender:"female",salary:55533,dob:new Date("1996-07-01")},
    {id:3,name:"pragyan",gender:"male",salary:55522,dob:new Date("1997-10-02")},
    {id:4,name:"pranav",gender:"male",salary:55511,dob:new Date("1996-01-25")},
    {id:5,name:"nafeesa",gender:"female",salary:55500.45678,dob:new Date("1998-06-04")}
  ];

  constructor() { }
  showEmployees(){
    return this.emplist;
  }
}
