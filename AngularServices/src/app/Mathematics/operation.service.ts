import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  counter=0;
  constructor() { }
  // business logic
   addServiceFun(...nums:number[]):number{
      console.log("in service");
      
      let sum=0;
      for(let num of nums){
        sum=sum+num;
      }

      return sum;
   }

   incrCounter():void {
    this.counter++;
   }
   decrCounter():void {
    this.counter--;
   }
   getCounter():number {
    return this.counter;
   }
}
