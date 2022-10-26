import { Product } from "./product.model";


export class ProductState{
    readonly productArray:Product[];
    constructor(array:Product[]){
        this.productArray=array;
    }
}