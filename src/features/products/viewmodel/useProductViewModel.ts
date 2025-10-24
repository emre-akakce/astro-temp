// src/features/products/viewmodel/useProductViewModel.ts
import { useProductContext } from './ProductContext';
import { saveCount, filterProducts, type Product, initialProducts } from '../model/productService';
import { useEffect, useMemo } from 'react';

export const useProductViewModel = () => {
  const { state, dispatch } = useProductContext();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const setFilter = (filter: string) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  const filteredProducts = useMemo(() => {
    return filterProducts(state.products, state.filter);
  }, [state.products, state.filter]);

  // Effect to save count whenever it changes
  useEffect(() => {
    saveCount(state.count);
  }, [state.count]);

  return {
    count: state.count,
    increment,
    decrement,
    products: state.products,
    filteredProducts,
    filter: state.filter,
    setFilter,
  };
};