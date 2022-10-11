import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  voterAge=0;
  myCity="";
  cities=["mumbai","Pune","solapur","Kolhapur","SaNgli","sAtara"];

  employee={
    empId: 123,
    empName:"Hari",
    empSalary:56000
  }
   stud=new Student(33,"Sonam",89);
}

class Student{
  studId:number;
  studName:string;
  studPercentage:number;
  constructor(id:number, name:string, perct:number){
    this.studId=id;
    this.studName=name;
    this.studPercentage=perct;
  }
}