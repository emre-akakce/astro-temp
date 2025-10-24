// src/features/products/viewmodel/product/productReducer.ts
import type { Product } from '../../model/productService';
import {
  INCREMENT,
  DECREMENT,
  SET_COUNT,
  SET_PRODUCTS_LOADING,
  SET_PRODUCTS,
  type ProductAction,
} from './productActions';

export type ProductState = {
  count: number;
  products: Product[];
  productsLoading: boolean;
};

export const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case SET_COUNT:
      return { ...state, count: action.payload };
    case SET_PRODUCTS_LOADING:
      return { ...state, productsLoading: action.payload };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};