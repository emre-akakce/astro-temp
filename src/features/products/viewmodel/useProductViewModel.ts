// src/features/products/viewmodel/useProductViewModel.ts
import { useProductContext } from './ProductContext';
import { saveCount } from '../model/productService';
import { useEffect } from 'react';

export const useProductViewModel = () => {
  const { state, dispatch } = useProductContext();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  // Effect to save count whenever it changes
  useEffect(() => {
    saveCount(state.count);
  }, [state.count]);

  return {
    count: state.count,
    increment,
    decrement,
  };
};