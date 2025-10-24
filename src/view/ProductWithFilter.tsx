import React from 'react';
import { ProductProvider } from '../viewmodel/product/ProductContext'; // Updated import path
import { FilterProvider } from '../viewmodel/filter/FilterContext';
import ProductList from './product/ProductList';
import FilterComponent from './filter/FilterComponent';

const ProductWithFilter: React.FC = () => {
  return (
    <FilterProvider>
      <ProductProvider>
        <FilterComponent />
        <ProductList />
      </ProductProvider>
    </FilterProvider>
  );
};

export default ProductWithFilter;