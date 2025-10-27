import React from 'react';
import { ProductProvider } from '../viewmodel/product/ProductContext';
import { FilterProvider } from '../viewmodel/filter/FilterContext';
import ProductList from './product/ProductList';
import FilterComponent from './filter/FilterComponent';
import { allProducts } from 'src/repositories/productRepository';
import { LanguageProvider } from '../viewmodel/language/LanguageContext';
import LanguageView from './LanguageView';
import { useLanguageViewModel } from '../viewmodel/language/useLanguageViewModel';

const LanguageSelector: React.FC = () => {
  const { setLanguage } = useLanguageViewModel();

  return (
    <div>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('tr')}>Turkish</button>
      <button onClick={() => setLanguage('uae')}>UAE</button>
    </div>
  );
};

const ProductWithFilter: React.FC = () => {
  const productInitialState = {
    count: 0,
    products: allProducts,
    productsLoading: false,
  };
  
  return (
    <LanguageProvider>
      <FilterProvider>
        <ProductProvider initialState={productInitialState}>
          <LanguageSelector />
          <LanguageView />
          <FilterComponent />
          <ProductList />
        </ProductProvider>
      </FilterProvider>
    </LanguageProvider>
  );
};

export default ProductWithFilter;