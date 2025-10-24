// src/viewmodel/filter/filterReducer.ts
import type { Filter } from '../../model/product';
import { SET_AVAILABLE_FILTERS, SET_SELECTED_FILTER, SET_FILTERS_LOADING, type FilterAction } from './filterActions';

export type FilterState = {
  availableFilters: Filter[];
  selectedFilter: string;
  filtersLoading: boolean;
};

export const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case SET_AVAILABLE_FILTERS:
      return { ...state, availableFilters: action.payload };
    case SET_SELECTED_FILTER:
      return { ...state, selectedFilter: action.payload };
    case SET_FILTERS_LOADING:
      return { ...state, filtersLoading: action.payload };
    default:
      return state;
  }
};