// src/viewmodel/product/useProductViewModel.ts
import { useProductContext } from './ProductContext';
import { useFilterViewModel } from '../filter/useFilterViewModel';
import { getProducts } from '../../repositories/productRepository';
import { useEffect, useCallback } from 'react';
import {
  setProductsLoading as setProductsLoadingAction,
  setProducts as setProductsAction,
} from './productActions';
import { getEventMap } from './eventMapper';
import { useLanguageViewModel } from '../language/useLanguageViewModel';

export const useProductViewModel = () => {
  const { state, dispatch } = useProductContext();
  const { selectedFilter } = useFilterViewModel(); // Consume the filter viewmodel
  const { language, languageUpdated } = useLanguageViewModel();
  const eventMap = getEventMap(dispatch);

  const dispatchEvent = useCallback((eventName: keyof typeof eventMap, payload: any) => {
    const eventAction = eventMap[eventName];
    if (eventAction) {
      eventAction(payload);
    } else {
      console.warn(`No event action found for event: ${eventName}`);
    }
  }, [eventMap]);

  const fetchProducts = async () => {
    dispatch(setProductsLoadingAction(true));
    try {
      const products = await getProducts(selectedFilter, language); // Use selectedFilter from filter viewmodel
      dispatch(setProductsAction(products));
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      dispatch(setProductsLoadingAction(false));
    }
  };
  

  // Fetch products whenever the selected filter or lang. changes
  useEffect(() => {   
    if (selectedFilter || languageUpdated) {
      fetchProducts();
    }
  }, [selectedFilter, dispatch]); // Depend on selectedFilter from the filter viewmodel


  // Effect to save count whenever it changes
  useEffect(() => {
    console.log('Count changed:', state.count);
  }, [state.count]);

  return {
    count: state.count,
    dispatchEvent,
    products: state.products,
    productsLoading: state.productsLoading,
  };
};