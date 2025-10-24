// src/features/products/view/FilterComponent.tsx
import React from 'react';
import { useProductViewModel } from '../viewmodel/useProductViewModel';

const FilterComponent: React.FC = () => {
  const { filter, setFilter } = useProductViewModel();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Filter products by name or category"
        value={filter}
        onChange={handleChange}
        style={{ padding: '8px', width: '300px' }}
      />
    </div>
  );
};

export default FilterComponent;