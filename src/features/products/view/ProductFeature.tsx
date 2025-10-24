// src/features/products/view/ProductFeature.tsx
import React from 'react';
import { ProductProvider } from '../viewmodel/ProductContext';
import Counter from './Counter';

const ProductFeature: React.FC = () => {
  return (
    <ProductProvider>
      <Counter />
    </ProductProvider>
  );
};

export default ProductFeature;