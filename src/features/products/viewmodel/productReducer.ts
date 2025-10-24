// src/features/products/viewmodel/productReducer.ts
import type { Product } from '../model/productService';

export type ProductState = {
  count: number;
  products: Product[];
  filter: string;
};

export type ProductAction = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET_COUNT'; payload: number }
  | { type: 'SET_FILTER'; payload: string };

export const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SET_COUNT':
      return { ...state, count: action.payload };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};