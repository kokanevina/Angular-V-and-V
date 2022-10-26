import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductIntf } from './product.model';
import { AppState } from '../app.state';
import { HttpClient } from  '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Observable<ProductIntf[]>;
  products_2:ProductIntf[] | undefined;
  constructor(private store: Store<AppState>, private http:HttpClient) {
    this.products = this.store.select(state => state.product);
   }
  addProduct(id:any,name:any, price:any) {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <ProductIntf> {
        id:id,
        name: name,
        price: price
      }
    });
   
  }
  ngOnInit(): void {
  }

}
