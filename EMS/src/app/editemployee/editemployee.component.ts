import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  employees:Observable<Employee[]>;
  constructor(private empService:EmployeeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log(this.route);
   // this.router.navigate(['addemployee',form.value.empname]);
  }
  onBack(){
    this.router.navigate(["maincontainer"]);
  }
  onHome(){
    this.router.navigate(["maincontainer"]);
  }

}
