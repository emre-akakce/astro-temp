// src/features/products/viewmodel/useProductViewModel.ts
import { useProductContext } from './ProductContext';
import { saveCount, getFilters, getProducts, type Product } from '../model/productService';
import { useEffect, useMemo, useCallback } from 'react';

export const useProductViewModel = () => {
  const { state, dispatch } = useProductContext();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const setSelectedFilter = useCallback((filterValue: string) => {
    dispatch({ type: 'SET_SELECTED_FILTER', payload: filterValue });
  }, [dispatch]);

  // Fetch available filters on mount
  useEffect(() => {
    const fetchFilters = async () => {
      dispatch({ type: 'SET_FILTERS_LOADING', payload: true });
      try {
        const filters = await getFilters();
        dispatch({ type: 'SET_AVAILABLE_FILTERS', payload: filters });
        // Set initial selected filter to 'all' or the first available filter
        if (filters.length > 0) {
          dispatch({ type: 'SET_SELECTED_FILTER', payload: filters[0].value });
        }
      } catch (error) {
        console.error('Failed to fetch filters:', error);
      } finally {
        dispatch({ type: 'SET_FILTERS_LOADING', payload: false });
      }
    };
    fetchFilters();
  }, [dispatch]);

  // Fetch products whenever the selected filter changes
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'SET_PRODUCTS_LOADING', payload: true });
      try {
        const products = await getProducts(state.selectedFilter);
        dispatch({ type: 'SET_PRODUCTS', payload: products });
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        dispatch({ type: 'SET_PRODUCTS_LOADING', payload: false });
      }
    };

    if (state.selectedFilter !== undefined) { // Only fetch if a filter is selected
      fetchProducts();
    }
  }, [state.selectedFilter, dispatch]);


  // Effect to save count whenever it changes
  useEffect(() => {
    saveCount(state.count);
  }, [state.count]);

  return {
    count: state.count,
    increment,
    decrement,
    products: state.products, // This will now be the filtered products from the API
    availableFilters: state.availableFilters,
    selectedFilter: state.selectedFilter,
    setSelectedFilter,
    productsLoading: state.productsLoading,
    filtersLoading: state.filtersLoading,
  };
};