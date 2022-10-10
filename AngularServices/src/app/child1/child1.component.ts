import { Component, OnInit } from '@angular/core';
import { OperationService } from '../Mathematics/operation.service';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  child1Count=this.opService.counter;
  constructor( private opService:OperationService) { }

  ngOnInit(): void {
  }

  incr(){
    this.opService.incrCounter();
    this.child1Count=this.opService.getCounter();
  }
  decr(){
    this.opService.decrCounter
    this.child1Count=this.opService.getCounter();
  }
}
