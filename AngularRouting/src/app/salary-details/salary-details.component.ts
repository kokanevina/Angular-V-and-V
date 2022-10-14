import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salary-details',
  templateUrl: './salary-details.component.html',
  styleUrls: ['./salary-details.component.css']
})
export class SalaryDetailsComponent implements OnInit {
  employeeId:number=0;
  salaryObject:EmployeeSalary;
  constructor(private _myRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
   this.employeeId=parseInt(this._myRoute.snapshot.paramMap.get('eid'));
  // console.log(this.employeeId);
   this.findEmployee();
  }

  salaryArray:EmployeeSalary[]=[
    new EmployeeSalary(11,78000.563783,100000,90000),
    new EmployeeSalary(10,88000.6,110000,1000000),
    new EmployeeSalary(15,58000.44444,75000,70000),
    new EmployeeSalary(12,68000.45345,78000,75000),
    new EmployeeSalary(16,65000.55544,76000,74000)
   ];
  
  findEmployee(){
      this.salaryObject=this.salaryArray.find(empSalary=>empSalary.empId==this.employeeId)
   // console.log(this.salaryObject);
    
    }

}

class EmployeeSalary{
  empId:number;
  empSalary:number;
  grossSalary:number;
  netSalary:number;

  constructor(id:number,salary:number, gs:number, ns:number){
    this.empId=id;
    this.empSalary=salary;
    this.grossSalary=gs;
    this.netSalary=ns;
  }
}