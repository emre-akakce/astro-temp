import React from 'react';
import { ProductProvider } from '../viewmodel/product/ProductContext'; // Updated import path
import { FilterProvider } from '../viewmodel/filter/FilterContext';
import ProductList from './product/ProductList';
import FilterComponent from './filter/FilterComponent';
import { allProducts } from 'src/repositories/productRepository';

const ProductWithFilter: React.FC = () => {
  const productInitialState = {
    count: 0,
    products: allProducts,
    productsLoading: false,
  };
  
  return (
    <FilterProvider>
      <ProductProvider initialState={productInitialState}>
        <FilterComponent />
        <ProductList />
      </ProductProvider>
    </FilterProvider>
  );
};

export default ProductWithFilter;