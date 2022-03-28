import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup} from '@angular/forms';
import { EmployeServiceService } from '../employe-service.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empData = new FormGroup({
    EmpN: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    Salary: new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')]),
    Dep: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    cit: new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')]) 
  })
  get EmpN(){
    return this.empData.get('EmpN');
  }
  get Salary(){
    return this.empData.get('Salary');
  }
  get Dep(){
    return this.empData.get('Dep');
  }
  get cit(){
    return this.empData.get('cit');
  }
  constructor(private EmpServ:EmployeServiceService ) { }

  ngOnInit(): void {
  }
  EmployData(){
    alert(JSON.stringify(this.empData.value));
    this.EmpServ.SaveIt(this.empData.value);
  }

}
 