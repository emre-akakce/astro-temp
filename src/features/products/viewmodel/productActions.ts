// src/features/products/viewmodel/productActions.ts
import type { Filter, Product } from '../model/productService';

export type ProductAction = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET_COUNT'; payload: number }
  | { type: 'SET_FILTER'; payload: string } // This will set the selected filter value
  | { type: 'SET_AVAILABLE_FILTERS'; payload: Filter[] }
  | { type: 'SET_SELECTED_FILTER'; payload: string }
  | { type: 'SET_PRODUCTS_LOADING'; payload: boolean }
  | { type: 'SET_FILTERS_LOADING'; payload: boolean }
  | { type: 'SET_PRODUCTS'; payload: Product[] };

// Action Creators
export const increment = () => ({ type: 'INCREMENT' } as const);
export const decrement = () => ({ type: 'DECREMENT' } as const);
export const setCount = (payload: number) => ({ type: 'SET_COUNT', payload } as const);
export const setFilter = (payload: string) => ({ type: 'SET_FILTER', payload } as const);
export const setAvailableFilters = (payload: Filter[]) => ({ type: 'SET_AVAILABLE_FILTERS', payload } as const);
export const setSelectedFilter = (payload: string) => ({ type: 'SET_SELECTED_FILTER', payload } as const);
export const setProductsLoading = (payload: boolean) => ({ type: 'SET_PRODUCTS_LOADING', payload } as const);
export const setFiltersLoading = (payload: boolean) => ({ type: 'SET_FILTERS_LOADING', payload } as const);
export const setProducts = (payload: Product[]) => ({ type: 'SET_PRODUCTS', payload } as const);