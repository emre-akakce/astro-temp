import React from 'react';
import { useProductViewModel } from '../../../viewmodel/product/useProductViewModel';
import type { Product } from '../../../model/product';

const ProductView: React.FC = () => {
  const { count, dispatchEvent, products, productsLoading } = useProductViewModel();

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px' }}>
      <h2>Ürün Sayacı</h2>
      <p>Sayı: {count}</p>
      <button onClick={() => dispatchEvent('INCREMENT', undefined)} style={{ marginRight: '10px', padding: '8px 15px', cursor: 'pointer' }}>Artır</button>
      <button onClick={() => dispatchEvent('DECREMENT', undefined)} style={{ padding: '8px 15px', cursor: 'pointer' }}>Azalt</button>

      <h3 style={{ marginTop: '20px' }}>Ürünler</h3>
      {productsLoading ? (
        <p>Ürünler yükleniyor...</p>
      ) : products.length === 0 ? (
        <p>Seçili filtre için ürün bulunamadı.</p>
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

export default ProductView;