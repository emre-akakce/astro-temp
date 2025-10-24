// src/features/products/viewmodel/productReducer.ts

export type ProductState = {
  count: number;
};

export type ProductAction = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET_COUNT'; payload: number };

export const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SET_COUNT':
      return { ...state, count: action.payload };
    default:
      return state;
  }
};