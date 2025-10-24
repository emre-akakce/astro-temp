// src/features/products/view/ProductFeature.tsx
import React from 'react';
import { ProductProvider } from '../viewmodel/ProductContext';
import { FilterProvider } from '../viewmodel/filter/FilterContext'; // Updated import path
import ProductList from './ProductList';
import FilterComponent from './FilterComponent';

const ProductFeature: React.FC = () => {
  return (
    <FilterProvider> {/* Wrap with FilterProvider */}
      <ProductProvider>
        <FilterComponent />
        <ProductList />
      </ProductProvider>
    </FilterProvider>
  );
};

export default ProductFeature;