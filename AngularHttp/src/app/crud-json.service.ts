import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudJsonService {
  path="http://localhost:8000/departmentArray";
  constructor(private _httpService:HttpClient) { }

  getData(){
    return this._httpService.get(this.path);
  }
  searchData(deptId:any){
    console.log(typeof deptId);
    
    return this._httpService.get(this.path+"/"+deptId);
  }
}
