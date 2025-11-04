// src/view/product/ProductList.tsx
import React from 'react';
import type { Product } from 'src/model/product';
import { useProductViewModel } from 'src/viewmodel/product/useProductViewModel';

const ProductList: React.FC = () => {
  const { count, dispatchEvent, products, productsLoading } = useProductViewModel();

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px' }}>
      <h2>Product Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatchEvent('INCREMENT', undefined)} style={{ marginRight: '10px', padding: '8px 15px', cursor: 'pointer' }}>Increment</button>
      <button onClick={() => dispatchEvent('DECREMENT', undefined)} style={{ padding: '8px 15px', cursor: 'pointer' }}>Decrement</button>

      <h3 style={{ marginTop: '20px' }}>Products</h3>
      {productsLoading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products found for the selected filter.</p>
      ) : (
        <ul>
          {products.map((product: Product) => (
            <li key={product.id}>{product.name} ({product.category})</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;