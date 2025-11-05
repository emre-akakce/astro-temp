import React from 'react';
import { ProductProvider } from '../viewmodel/product/ProductContext';
import { FilterProvider } from '../viewmodel/filter/FilterContext';
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
const defaultLanguage = 'en';
const ProductWithFilter: React.FC = () => {
  const products = allProducts(defaultLanguage);
  const productInitialState = {
    count: 0,
    products: products,
    productsLoading: false,
  };
  
  return (
    <LanguageProvider initialState={{ language: defaultLanguage }} >
      <FilterProvider>
        <ProductProvider initialState={productInitialState}>
          <LanguageSelector />
          <LanguageView />
        </ProductProvider>
      </FilterProvider>
    </LanguageProvider>
  );
};

export default ProductWithFilter;