// src/features/products/viewmodel/useProductViewModel.ts
import { useProductContext } from './ProductContext';
import { saveCount, getFilters, getProducts, type Product } from '../model/productService';
import { useEffect, useCallback } from 'react';
import {
  increment as incrementAction,
  decrement as decrementAction,
  setSelectedFilter as setSelectedFilterAction,
  setAvailableFilters as setAvailableFiltersAction,
  setProductsLoading as setProductsLoadingAction,
  setFiltersLoading as setFiltersLoadingAction,
  setProducts as setProductsAction,
} from './productActions';

export const useProductViewModel = () => {
  const { state, dispatch } = useProductContext();

  const increment = () => {
    dispatch(incrementAction());
  };

  const decrement = () => {
    dispatch(decrementAction());
  };

  const setSelectedFilter = useCallback((filterValue: string) => {
    dispatch(setSelectedFilterAction(filterValue));
  }, [dispatch]);

  // Fetch available filters on mount
  useEffect(() => {
    const fetchFilters = async () => {
      dispatch(setFiltersLoadingAction(true));
      try {
        const filters = await getFilters();
        dispatch(setAvailableFiltersAction(filters));
        // Set initial selected filter to 'all' or the first available filter
        if (filters.length > 0) {
          dispatch(setSelectedFilterAction(filters[0].value));
        }
      } catch (error) {
        console.error('Failed to fetch filters:', error);
      } finally {
        dispatch(setFiltersLoadingAction(false));
      }
    };
    fetchFilters();
  }, [dispatch]);

  // Fetch products whenever the selected filter changes
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setProductsLoadingAction(true));
      try {
        const products = await getProducts(state.selectedFilter);
        dispatch(setProductsAction(products));
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        dispatch(setProductsLoadingAction(false));
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