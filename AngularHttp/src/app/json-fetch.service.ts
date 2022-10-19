import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JsonFetchService {

  constructor( private _httpService:HttpClient) { }

  fetchJsonData(){
    return this._httpService.get("assets/Data/DepartmentsInfo.json");
  }
}
