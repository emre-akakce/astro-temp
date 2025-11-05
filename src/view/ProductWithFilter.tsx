import React from 'react';
import { ProductProvider } from '../viewmodel/product/ProductContext';
import { FilterProvider } from '../viewmodel/filter/FilterContext';
import { allProducts } from 'src/repositories/productRepository';
import { LanguageProvider } from '../viewmodel/language/LanguageContext';
import LanguageView from './LanguageView';
import { useLanguageViewModel } from '../viewmodel/language/useLanguageViewModel';

const LanguageSelector: React.FC = () => {
  const { dispatchEvent } = useLanguageViewModel();

  return (
    <div>
      <button onClick={() => dispatchEvent('CHANGE_LANGUAGE', 'en')}>English</button>
      <button onClick={() => dispatchEvent('CHANGE_LANGUAGE', 'tr')}>Turkish</button>
      <button onClick={() => dispatchEvent('CHANGE_LANGUAGE', 'uae')}>UAE</button>
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