import { Injectable } from '@angular/core';
import { Employeedetails } from './employeedetails';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservService {
  emplists:Employeedetails[]=[
  {id:1,name:"kriti",gender:"female",salary:18000000,dob: new Date('1997-08-08')},
  {id:2,name:"sarvo",gender:"male",salary:10000,dob: new Date('1995-10-22')},
  {id:3,name:"vinay",gender:"male",salary:20000,dob: new Date('1996-12-13')},
  {id:4,name:"sayon",gender:"male",salary:20000000,dob: new Date('1997-01-14')},
  {id:5,name:"ishani",gender:"female",salary:800000,dob: new Date('1996-10-03')},
  {id:6,name:"sunayana",gender:"female",salary:9000000,dob: new Date('1997-10-11')},
];

  constructor() { }
  getdetails(){
    return this.emplists;
  }

  save(employ:Employeedetails){
   // console.log("In service Employee "+employ.id);
    this.emplists.push(employ);
  }
}
