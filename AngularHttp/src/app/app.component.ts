import { Component } from '@angular/core';
import { JsonFetchService } from './json-fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHttp';

  constructor(private _jsonService:JsonFetchService){
  }
  departmentsJson:any;
  deptArray:Department[];
  fetch(){
    this._jsonService.fetchJsonData().subscribe(
      {
        next:result=>{this.departmentsJson=result; 
         this.deptArray=this.departmentsJson.departmentArray
         console.log(this.deptArray);
        },
        error:errorRes=>console.log(errorRes)
      }
    );
  }
}

class Department{
  deptId:string;
  deptName:string;
  deptBudget:number;

  constructor(id:string,name:string,budget:number){
    this.deptId=id;
    this.deptName=name;
    this.deptBudget=budget;
  }
}