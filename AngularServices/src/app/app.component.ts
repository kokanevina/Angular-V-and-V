import { Component } from '@angular/core';
import { OperationService } from './Mathematics/operation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1=0;
  num2=0;
  sumResult=0;
  count=this.operateService.counter;
  constructor(private operateService:OperationService){

  }
  add(){
    this.sumResult=this.operateService.addServiceFun(this.num1,this.num2);
  }
  incr(){
    this.operateService.incrCounter();
    this.count=this.operateService.getCounter();
  }
  decr(){
    this.operateService.decrCounter();
    this.count=this.operateService.getCounter();
  }
}
