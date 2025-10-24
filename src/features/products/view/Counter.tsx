// src/features/products/view/Counter.tsx
import React from 'react';
import { useProductViewModel } from '../viewmodel/useProductViewModel';

const Counter: React.FC = () => {
  const { count, increment, decrement } = useProductViewModel();

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '8px' }}>
      <h2>Product Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment} style={{ marginRight: '10px', padding: '8px 15px', cursor: 'pointer' }}>Increment</button>
      <button onClick={decrement} style={{ padding: '8px 15px', cursor: 'pointer' }}>Decrement</button>
    </div>
  );
};

export default Counter;