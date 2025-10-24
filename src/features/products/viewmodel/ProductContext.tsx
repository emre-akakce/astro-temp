// src/features/products/viewmodel/ProductContext.tsx
import React, { createContext, useReducer, useContext, type ReactNode,  } from 'react';
import { productReducer, type ProductState, type ProductAction } from './productReducer';
import { getInitialCount, initialProducts } from '../model/productService';

interface ProductContextType {
  state: ProductState;
  dispatch: React.Dispatch<ProductAction>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const initialState: ProductState = {
    count: getInitialCount(),
    products: initialProducts,
    filter: '',
  };
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};