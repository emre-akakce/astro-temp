// src/features/products/model/productService.ts

export const getInitialCount = (): number => {
  // In a real application, this would fetch data from an API or local storage
  return 0;
};

export const saveCount = (count: number): void => {
  // In a real application, this would persist data
  console.log("Saving count:", count);
};