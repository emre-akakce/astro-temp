// src/features/products/view/FilterComponent.tsx
import React from 'react';
import { useProductViewModel } from '../viewmodel/useProductViewModel';

const FilterComponent: React.FC = () => {
  const { availableFilters, selectedFilter, setSelectedFilter, filtersLoading } = useProductViewModel();

  if (filtersLoading) {
    return <div style={{ marginBottom: '20px' }}>Loading filters...</div>;
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Filter Products:</h3>
      {availableFilters.map(filter => (
        <button
          key={filter.id}
          onClick={() => setSelectedFilter(filter.value)}
          style={{
            marginRight: '10px',
            padding: '8px 15px',
            cursor: 'pointer',
            backgroundColor: selectedFilter === filter.value ? '#007bff' : '#f0f0f0',
            color: selectedFilter === filter.value ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;