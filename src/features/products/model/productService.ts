// src/features/products/model/productService.ts

export interface Product {
  id: string;
  name: string;
  category: string;
}

export const initialProducts: Product[] = [
  { id: '1', name: 'Laptop', category: 'Electronics' },
  { id: '2', name: 'Mouse', category: 'Electronics' },
  { id: '3', name: 'Keyboard', category: 'Electronics' },
  { id: '4', name: 'Desk', category: 'Furniture' },
  { id: '5', name: 'Chair', category: 'Furniture' },
];

export const getInitialCount = (): number => {
  // In a real application, this would fetch data from an API or local storage
  return 0;
};

export const saveCount = (count: number): void => {
  // In a real application, this would persist data
  console.log("Saving count:", count);
};

export const filterProducts = (products: Product[], filter: string): Product[] => {
  if (!filter) {
    return products;
  }
  const lowerCaseFilter = filter.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowerCaseFilter) ||
    product.category.toLowerCase().includes(lowerCaseFilter)
  );
};