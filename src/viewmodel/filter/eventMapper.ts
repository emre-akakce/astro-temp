// src/viewmodel/filter/eventMapper.ts
import { setSelectedFilter as setSelectedFilterAction } from './filterActions';

type Dispatch = (action: any) => void;

export const getEventMap = (dispatch: Dispatch) => ({
  'SET_SELECTED_FILTER': (filterValue: string) => dispatch(setSelectedFilterAction(filterValue)),
  // Add other filter-related events here
});
