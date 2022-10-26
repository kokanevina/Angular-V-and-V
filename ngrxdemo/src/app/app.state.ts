import { ProductIntf } from "./product/product.model";

export class AppState{
     product: ProductIntf[];

     constructor(pr:ProductIntf[]){
        this.product=pr;
     }
}