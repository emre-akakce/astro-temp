// src/viewmodel/product/productActions.ts
import type { Product } from '../../model/productService';

// Action Type Constants
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COUNT = 'SET_COUNT';
export const SET_PRODUCTS_LOADING = 'SET_PRODUCTS_LOADING';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export type ProductAction = 
  | { type: typeof INCREMENT }
  | { type: typeof DECREMENT }
  | { type: typeof SET_COUNT; payload: number }
  | { type: typeof SET_PRODUCTS_LOADING; payload: boolean }
  | { type: typeof SET_PRODUCTS; payload: Product[] };

// Action Creators
export const increment = () => ({ type: INCREMENT } as const);
export const decrement = () => ({ type: DECREMENT } as const);
export const setCount = (payload: number) => ({ type: SET_COUNT, payload } as const);
export const setProductsLoading = (payload: boolean) => ({ type: SET_PRODUCTS_LOADING, payload } as const);
export const setProducts = (payload: Product[]) => ({ type: SET_PRODUCTS, payload } as const);