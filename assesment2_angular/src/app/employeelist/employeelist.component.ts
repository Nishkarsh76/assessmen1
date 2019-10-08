import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  emplist:Employee[];
  constructor(private empservice:EmployeeService) { 
    this.emplist=this.empservice.showEmployees();
  }

  ngOnInit() {
    
  }

}
