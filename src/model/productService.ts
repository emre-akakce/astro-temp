// src/model/productService.ts

export interface Product {
  id: string;
  name: string;
  category: string;
}

export interface Filter {
  id: string;
  name: string;
  value: string;
}

const allProducts: Product[] = [
  { id: '1', name: 'Laptop', category: 'Electronics' },
  { id: '2', name: 'Mouse', category: 'Electronics' },
  { id: '3', name: 'Keyboard', category: 'Electronics' },
  { id: '4', name: 'Desk', category: 'Furniture' },
  { id: '5', name: 'Chair', category: 'Furniture' },
  { id: '6', name: 'Monitor', category: 'Electronics' },
  { id: '7', name: 'Lamp', category: 'Furniture' },
];

const mockFilters: Filter[] = [
  { id: 'all', name: 'All', value: '' },
  { id: 'electronics', name: 'Electronics', value: 'electronics' },
  { id: 'furniture', name: 'Furniture', value: 'furniture' },
];

export const getInitialCount = (): number => {
  // In a real application, this would fetch data from an API or local storage
  return 0;
};

export const saveCount = (count: number): void => {
  // In a real application, this would persist data
  console.log("Saving count:", count);
};

export const getFilters = async (): Promise<Filter[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFilters);
    }, 500); // Simulate API delay
  });
};

export const getProducts = async (filterValue: string): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!filterValue) {
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