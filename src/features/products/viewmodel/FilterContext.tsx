// src/features/products/viewmodel/FilterContext.tsx
import React, { createContext, useReducer, useContext, type ReactNode } from 'react';
import { filterReducer, type FilterState } from './filterReducer';
import type { FilterAction } from './filterActions';

interface FilterContextType {
  state: FilterState;
  dispatch: React.Dispatch<FilterAction>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const initialState: FilterState = {
    availableFilters: [],
    selectedFilter: '',
    filtersLoading: false,
  };
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};