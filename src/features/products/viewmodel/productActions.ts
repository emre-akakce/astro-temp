// src/features/products/viewmodel/productActions.ts
import type { Filter, Product } from '../model/productService';

// Action Type Constants
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COUNT = 'SET_COUNT';
export const SET_FILTER = 'SET_FILTER';
export const SET_AVAILABLE_FILTERS = 'SET_AVAILABLE_FILTERS';
export const SET_SELECTED_FILTER = 'SET_SELECTED_FILTER';
export const SET_PRODUCTS_LOADING = 'SET_PRODUCTS_LOADING';
export const SET_FILTERS_LOADING = 'SET_FILTERS_LOADING';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export type ProductAction = 
  | { type: typeof INCREMENT }
  | { type: typeof DECREMENT }
  | { type: typeof SET_COUNT; payload: number }
  | { type: typeof SET_FILTER; payload: string }
  | { type: typeof SET_AVAILABLE_FILTERS; payload: Filter[] }
  | { type: typeof SET_SELECTED_FILTER; payload: string }
  | { type: typeof SET_PRODUCTS_LOADING; payload: boolean }
  | { type: typeof SET_FILTERS_LOADING; payload: boolean }
  | { type: typeof SET_PRODUCTS; payload: Product[] };

// Action Creators
export const increment = () => ({ type: INCREMENT } as const);
export const decrement = () => ({ type: DECREMENT } as const);
export const setCount = (payload: number) => ({ type: SET_COUNT, payload } as const);
export const setFilter = (payload: string) => ({ type: SET_FILTER, payload } as const);
export const setAvailableFilters = (payload: Filter[]) => ({ type: SET_AVAILABLE_FILTERS, payload } as const);
export const setSelectedFilter = (payload: string) => ({ type: SET_SELECTED_FILTER, payload } as const);
export const setProductsLoading = (payload: boolean) => ({ type: SET_PRODUCTS_LOADING, payload } as const);
export const setFiltersLoading = (payload: boolean) => ({ type: SET_FILTERS_LOADING, payload } as const);
export const setProducts = (payload: Product[]) => ({ type: SET_PRODUCTS, payload } as const);