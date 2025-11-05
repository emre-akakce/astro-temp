import React from 'react';
import { useFilterViewModel } from '../../../viewmodel/filter/useFilterViewModel';
import type { Filter } from '../../../model/filter';
import { SET_SELECTED_FILTER } from 'src/viewmodel/filter/filterActions';

const FilterView: React.FC = () => {
  const { availableFilters, selectedFilter, dispatchEvent, filtersLoading } = useFilterViewModel();

  if (filtersLoading) {
    return <div style={{ marginBottom: '20px' }}>Loading filters...</div>;
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Filter Products:</h3>
      {availableFilters.map((filter: Filter) => (
        <button
          key={filter.id}
          onClick={() => dispatchEvent(SET_SELECTED_FILTER, filter.value)}
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

export default FilterView;