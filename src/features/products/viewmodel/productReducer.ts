// src/features/products/viewmodel/productReducer.ts
import type { Product, Filter } from '../model/productService';

export type ProductState = {
  count: number;
  products: Product[];
  filter: string; // This will now represent the current filter value (e.g., 'electronics')
  availableFilters: Filter[];
  selectedFilter: string;
  productsLoading: boolean;
  filtersLoading: boolean;
};

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

export const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SET_COUNT':
      return { ...state, count: action.payload };
    case 'SET_FILTER': // This action now sets the selected filter value
      return { ...state, selectedFilter: action.payload };
    case 'SET_AVAILABLE_FILTERS':
      return { ...state, availableFilters: action.payload };
    case 'SET_SELECTED_FILTER':
      return { ...state, selectedFilter: action.payload };
    case 'SET_PRODUCTS_LOADING':
      return { ...state, productsLoading: action.payload };
    case 'SET_FILTERS_LOADING':
      return { ...state, filtersLoading: action.payload };
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};