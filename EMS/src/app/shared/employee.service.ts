import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http';
import { pipe, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl="http://localhost:8181/api/ems/";
   private employeeList:Employee[]=[
  ];
 //private employees=[new Employee(1,'bala','kumar')];

  //private employeeList:Employee[]=[new Employee(1,'bala','kumar')];
  
  constructor(private http:HttpClient) { }
  save(employee:Employee){
    return this.http.post(`${this.baseUrl}/addemployee`,employee);
  }
  edit(empName:String){
    return this.http.get<Employee>(`${this.baseUrl}editemployee/${empName}`);  
  }
  viewAll(){
    console.log('consol'+this.employeeList);
  //return this.employeeList.slice();
    return this.http.get<Employee[]>(`${this.baseUrl}viewemployee`);
  }
  deleteEmp(empName:String){

  }
}
