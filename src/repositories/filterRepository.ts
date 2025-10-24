// src/repositories/filterRepository.ts
import type { Filter } from '../model/filter';

const mockFilters: Filter[] = [
  { id: 'all', name: 'All', value: '' },
  { id: 'electronics', name: 'Electronics', value: 'electronics' },
  { id: 'furniture', name: 'Furniture', value: 'furniture' },
];

export const getFilters = async (): Promise<Filter[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFilters);
    }, 500); // Simulate API delay
  });
};

