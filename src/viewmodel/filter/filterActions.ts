// src/viewmodel/filter/filterActions.ts
import type { Filter } from '../../model/product';

// Action Type Constants
export const SET_AVAILABLE_FILTERS = 'SET_AVAILABLE_FILTERS';
export const SET_SELECTED_FILTER = 'SET_SELECTED_FILTER';
export const SET_FILTERS_LOADING = 'SET_FILTERS_LOADING';

export type FilterAction = 
  | { type: typeof SET_AVAILABLE_FILTERS; payload: Filter[] }
  | { type: typeof SET_SELECTED_FILTER; payload: string }
  | { type: typeof SET_FILTERS_LOADING; payload: boolean };

// Action Creators
export const setAvailableFilters = (payload: Filter[]) => ({ type: SET_AVAILABLE_FILTERS, payload } as const);
export const setSelectedFilter = (payload: string) => ({ type: SET_SELECTED_FILTER, payload } as const);
export const setFiltersLoading = (payload: boolean) => ({ type: SET_FILTERS_LOADING, payload } as const);