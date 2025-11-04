import React from 'react';
import { useLanguageViewModel } from '../viewmodel/language/useLanguageViewModel';

const LanguageView: React.FC = () => {
  const { getView } = useLanguageViewModel();
  const FilterComponent = getView('filter');
  const ProductListComponent = getView('product');

  return (
    <>
      <FilterComponent />
      <ProductListComponent />
    </>
  );
};

export default LanguageView;
