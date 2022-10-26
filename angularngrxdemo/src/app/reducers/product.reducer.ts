import { ADD_PRODUCT, SHOW_PRODUCTS} from "../actions/product.actions";
import { Product } from "../store/product.model";

export function addProductReducer(state: Product[] = [], action:any) {
    switch (action.type) {
      case ADD_PRODUCT:
          return [...state, action.payload]; /*adding new product in exisiting array (store) */
      case SHOW_PRODUCTS:
            return state;  /* returning current array(store) */
      default:
          return state; /* returning current array(store) */
      }
  }