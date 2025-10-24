// src/features/products/viewmodel/product/useProductViewModel.ts
import { useProductContext } from './ProductContext';
import { useFilterViewModel } from '../filter/useFilterViewModel'; // Updated import path
import { saveCount, getProducts, type Product } from '../../model/productService';
import { useEffect, useCallback } from 'react';
import {
  increment as incrementAction,
  decrement as decrementAction,
  setProductsLoading as setProductsLoadingAction,
  setProducts as setProductsAction,
} from './productActions';

export const useProductViewModel = () => {
  const { state, dispatch } = useProductContext();
  const { selectedFilter } = useFilterViewModel(); // Consume the filter viewmodel

  const increment = () => {
    dispatch(incrementAction());
  };

  const decrement = () => {
    dispatch(decrementAction());
  };

  // Fetch products whenever the selected filter changes
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setProductsLoadingAction(true));
      try {
        const products = await getProducts(selectedFilter); // Use selectedFilter from filter viewmodel
        dispatch(setProductsAction(products));
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        dispatch(setProductsLoadingAction(false));
      }
    };

    if (selectedFilter !== undefined) { // Only fetch if a filter is selected
      fetchProducts();
    }
  }, [selectedFilter, dispatch]); // Depend on selectedFilter from the filter viewmodel


  // Effect to save count whenever it changes
  useEffect(() => {
    saveCount(state.count);
  }, [state.count]);

  return {
    count: state.count,
    increment,
    decrement,
    products: state.products,
    productsLoading: state.productsLoading,
  };
};