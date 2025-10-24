// src/repositories/productRepository.ts
import type { Product } from '../model/product';

export const allProducts: Product[] = [
  { id: '1', name: 'Laptop', category: 'Electronics' },
  { id: '2', name: 'Mouse', category: 'Electronics' },
  { id: '3', name: 'Keyboard', category: 'Electronics' },
  { id: '4', name: 'Desk', category: 'Furniture' },
  { id: '5', name: 'Chair', category: 'Furniture' },
  { id: '6', name: 'Monitor', category: 'Electronics' },
  { id: '7', name: 'Lamp', category: 'Furniture' },
];

export const getProducts = async (filterValue: string): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!filterValue || filterValue === 'all') {
        resolve(allProducts);
      } else {
        const lowerCaseFilter = filterValue.toLowerCase();
        resolve(allProducts.filter(product =>
          product.category.toLowerCase().includes(lowerCaseFilter)
        ));
      }
    }, 700); // Simulate API delay
  });
};

