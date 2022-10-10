import { Component, OnInit } from '@angular/core';
import { OperationService } from '../Mathematics/operation.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  providers:[OperationService] // service object will be seperately provided
})
export class Child2Component implements OnInit {
  child2Count=this.opService.counter;
  constructor(private opService:OperationService) { }

  ngOnInit(): void {
  }
incr(){
  this.opService.incrCounter();
  this.child2Count=this.opService.getCounter();
}
decr(){
  this.opService.decrCounter();
  this.child2Count=this.opService.getCounter();
}
}
