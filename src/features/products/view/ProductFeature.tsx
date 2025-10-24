// src/features/products/view/ProductFeature.tsx
import React from 'react';
import { ProductProvider } from '../viewmodel/product/ProductContext'; // Updated import path
import { FilterProvider } from '../viewmodel/filter/FilterContext';
import ProductList from './ProductList';
import FilterComponent from './FilterComponent';

const ProductFeature: React.FC = () => {
  return (
    <FilterProvider>
      <ProductProvider>
        <FilterComponent />
        <ProductList />
      </ProductProvider>
    </FilterProvider>
  );
};

export default ProductFeature;