import { Product } from "./product.model";


export class ProductState{
    readonly product:Product[];
    constructor(array:Product[]){
        this.product=array;
    }
}