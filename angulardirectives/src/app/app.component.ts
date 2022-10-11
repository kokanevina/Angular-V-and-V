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
  
   studArray=[
    new Student(44,"Komal",78,["chem","phy","maths"]),
    new Student(42,"Sonal",88,["bio","botony","maths"]),
    new Student(34,"Shivendra",79,["maths","physics"]),
    new Student(45,"Rajesh",89,["chem"]),
    new Student(47,"Vishal",98,["chem"]),
    new Student(24,"Karan",75,["bio", "botony"])
   ]
}

class Student{
  studId:number;
  studName:string;
  studPercentage:number;
  subjects:string[];
  constructor(id:number, name:string, perct:number, subjects:string[]){
    this.studId=id;
    this.studName=name;
    this.studPercentage=perct;
    this.subjects=subjects;
  }
}