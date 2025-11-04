// src/view/product/ProductList.tsx
import React from 'react';
import { useLanguageViewModel } from '../../viewmodel/language/useLanguageViewModel';

const ProductList: React.FC = () => {
  const { getView } = useLanguageViewModel();
  const View = getView('product');  
  return <View />;
};

export default ProductList;