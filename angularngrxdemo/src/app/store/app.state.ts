import { Product } from "./product.model";


class ProductState{
    readonly productArray:Product[];
    constructor(array:Product[]){
        this.productArray=array;
    }
}