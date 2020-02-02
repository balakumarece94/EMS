import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../employee';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  private isAdded=false;
  empname='';
  employee: Employee=new Employee();
  constructor(private empService:EmployeeService,private route:ActivatedRoute,private router:Router) { }
  onBack(){
    this.router.navigate(["maincontainer"]);
  }
  onHome(){
    
    this.router.navigate(["maincontainer"]);
  }
  ngOnInit() {
    console.log("comeing");
    console.log(this.employee.uname);
    this.empname = this.route.snapshot.params['empname'];
 //   console.log(this.empname);
    // this.empService.edit(this.empname).subscribe(
      
    //   data=>{
    //     this.employee=data[0];
    //  console.log(this.employee);
    //  console.log(this.employee);
    //   },
    //   error=>{console.log(error)}
    // );
  }
  onSubmit(form: NgForm){
    this.empService.save(form.value)
    .subscribe(
      data=>this.isAdded=true,
      error=>this.isAdded=false
    );    
    form.reset();
  }
}
