import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editemployee1',
  templateUrl: './editemployee1.component.html',
  styleUrls: ['./editemployee1.component.css']
})
export class Editemployee1Component implements OnInit {

  constructor(private empService:EmployeeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    this.router.navigate(['editemployee1',form.value.empname]);
    console.log(form.value.empname);
  }
  onBack(){
    this.router.navigate(["maincontainer"]);
  }
  onHome(){
    this.router.navigate(["maincontainer"]);
  }

}
