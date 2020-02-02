import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  //employees:Employee[]=[];
  employees:Employee[]=[];
  constructor(private empService:EmployeeService,private router:Router) { }
  ngOnInit() {
    
    this.reloadData();
  }
  reloadData(){
    //this.employees=this.empService.viewAll();
    console.log('emp'+this.employees.length);
    this.empService.viewAll().subscribe(
      data=>{
        this.employees=data;
      },
      error=>{
        console.log(error);
      }
    );
  }
  onBack(){
    this.router.navigate(["maincontainer"]);
  }
  onHome(){
    this.router.navigate(["maincontainer"]);
  }

}
