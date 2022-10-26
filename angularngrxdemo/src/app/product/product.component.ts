import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductState } from '../store/app.state';
import { Product } from '../store/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Observable<Product[]>;
  constructor(private store: Store<ProductState>) {
      this.products=this.store.select(state=>state.product);
   }

  ngOnInit(): void {
  }
  addProducts(pid:any,pname:any,pprice:any){
    console.log("in function");
    
    this.store.dispatch({
      type:'ADD_PRODUCT',
      payload:{
        id:pid,
        name:pname,
        price:pprice
      }
    });
  }
}
