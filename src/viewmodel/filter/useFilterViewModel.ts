// src/viewmodel/filter/useFilterViewModel.ts
import { useFilterContext } from './FilterContext';
import { getFilters } from '../../repositories/filterRepository';
import { useEffect, useCallback } from 'react';
import {
  setAvailableFilters as setAvailableFiltersAction,
  setFiltersLoading as setFiltersLoadingAction,
} from './filterActions';
import { getEventMap } from './eventMapper';

export const useFilterViewModel = () => {
  const { state, dispatch } = useFilterContext();
  const eventMap = getEventMap(dispatch);

  const dispatchEvent = useCallback((eventName: keyof typeof eventMap, payload: any) => {
    const eventAction = eventMap[eventName];
    if (eventAction) {
      eventAction(payload);
    } else {
      console.warn(`No event action found for event: ${eventName}`);
    }
  }, [eventMap]);

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
    dispatchEvent,
    filtersLoading: state.filtersLoading,
  };
};