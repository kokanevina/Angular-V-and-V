import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 empArray:Employee[]=[
  new Employee(11,"kuMAR",78000.563783,new Date(2000, 6, 2)),
  new Employee(10,"Mohan",88000.6,new Date(2005, 5, 1)),
  new Employee(15,"rani poojari",58000.44444,new Date(2002, 8, 22)),
  new Employee(12,"komal",68000.45345,new Date(2010, 12, 12,13,20,0)),
  new Employee(16,"kishori",65000.55544,new Date(2010, 12, 11,10,30,0)),
 ];

}
class Employee{
  empId:number;
  empName: string;
  empSalary:number;
  joiningDate : Date;

  constructor(id:number,name:string,salary:number, jdate:Date){
    this.empId=id;
    this.empName=name;
    this.empSalary=salary;
    this.joiningDate=jdate;
  }
}
