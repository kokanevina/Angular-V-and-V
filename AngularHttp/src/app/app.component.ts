import { Component } from '@angular/core';
import { CrudJsonService } from './crud-json.service';
import { JsonFetchService } from './json-fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dpId="";
  constructor(private _jsonService:JsonFetchService, private _crudService:CrudJsonService){
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

  getDepartments(){
    this._crudService.getData().subscribe({
      next: result=>this.deptArray=result as Department[],
      error:err=>console.log(err)       
    });
  }
  searchDepartment(){
    this._crudService.searchData(this.dpId).subscribe({
      next: result=>console.log(result),
      error:err=>console.log(err)       
    });
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