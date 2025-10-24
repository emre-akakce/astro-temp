// src/viewmodel/filter/useFilterViewModel.ts
import { useFilterContext } from './FilterContext';
import { getFilters } from '../../repositories/filterRepository';
import { useEffect, useCallback } from 'react';
import {
  setAvailableFilters as setAvailableFiltersAction,
  setSelectedFilter as setSelectedFilterAction,
  setFiltersLoading as setFiltersLoadingAction,
} from './filterActions';

export const useFilterViewModel = () => {
  const { state, dispatch } = useFilterContext();

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
      } catch (error) {
        console.error('Failed to fetch filters:', error);
      } finally {
        dispatch(setFiltersLoadingAction(false));
      }
    };
    fetchFilters();
  }, [dispatch]);

  return {
    availableFilters: state.availableFilters,
    selectedFilter: state.selectedFilter,
    setSelectedFilter,
    filtersLoading: state.filtersLoading,
  };
};