// src/view/product/uae/ProductList.tsx
import React from 'react';
import type { Product } from 'src/model/product';
import { useProductViewModel } from 'src/viewmodel/product/useProductViewModel';


const ProductList: React.FC = () => {
  const { count, dispatchEvent, products, productsLoading } = useProductViewModel();

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px' }}>
      <h2>عداد المنتج</h2>
      <p>العدد: {count}</p>
      <button onClick={() => dispatchEvent('INCREMENT', undefined)} style={{ marginRight: '10px', padding: '8px 15px', cursor: 'pointer' }}>زيادة</button>
      <button onClick={() => dispatchEvent('DECREMENT', undefined)} style={{ padding: '8px 15px', cursor: 'pointer' }}>تقليل</button>

      <h3 style={{ marginTop: '20px' }}>المنتجات</h3>
      {productsLoading ? (
        <p>جار تحميل المنتجات...</p>
      ) : products.length === 0 ? (
        <p>لم يتم العثور على منتجات للمرشح المحدد.</p>
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