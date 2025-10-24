// src/features/products/view/ProductFeature.tsx
import React from 'react';
import { ProductProvider } from '../viewmodel/ProductContext';
import ProductList from './ProductList';
import FilterComponent from './FilterComponent';

const ProductFeature: React.FC = () => {
  return (
    <ProductProvider>
      <FilterComponent />
      <ProductList />
    </ProductProvider>
  );
};

export default ProductFeature;