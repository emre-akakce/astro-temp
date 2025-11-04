// src/viewmodel/product/eventMapper.ts
import { increment as incrementAction, decrement as decrementAction } from './productActions';

type Dispatch = (action: any) => void;

export const getEventMap = (dispatch: Dispatch) => ({
  'INCREMENT': (payload: any) => dispatch(incrementAction()),
  'DECREMENT': (payload: any) => dispatch(decrementAction()),
  // Add other product-related events here
});
