// @vitest-environment jsdom
import React from 'react';
import { render, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useProductViewModel } from '../../../src/viewmodel/product/useProductViewModel';
import { ProductProvider } from '../../../src/viewmodel/product/ProductContext';
import { FilterProvider } from '../../../src/viewmodel/filter/FilterContext';

describe('useProductViewModel (Component Integration Simplified)', () => {
  it('returns the correct runtime shape when called inside a component', async () => {
    let hookResult: any;

    const TestComponent = () => {
      hookResult = useProductViewModel();
      return null;
    };

    const productInitialState = {
      count: 5,
      products: [
        { id: 'p1', name: 'Product 1', category: 'General', price: 100 },
        { id: 'p2', name: 'Product 2', category: 'General', price: 200 },
      ],
      productsLoading: true,
    };

    await act(async () => {
      render(
        <ProductProvider initialState={productInitialState}>
          <FilterProvider>
            <TestComponent />
          </FilterProvider>
        </ProductProvider>
      );
    });

    expect(hookResult).toBeDefined();
    expect(hookResult.count).toBe(5);
    expect(hookResult.products.length).toBe(2);
    expect(hookResult.productsLoading).toBe(true);
    expect(typeof hookResult.dispatchEvent).toBe('function');
  });

  it('should increment and decrement the count', async () => {
    let hookResult: any;

    const TestComponent = () => {
      hookResult = useProductViewModel();
      return null;
    };

    const productInitialState = { count: 5, products: [], productsLoading: false };

    await act(async () => {
      render(
        <ProductProvider initialState={productInitialState}>
          <FilterProvider>
            <TestComponent />
          </FilterProvider>
        </ProductProvider>
      );
    });

    act(() => {
      hookResult.dispatchEvent('INCREMENT');
    });

    expect(hookResult.count).toBe(6);

    act(() => {
      hookResult.dispatchEvent('DECREMENT');
    });

    expect(hookResult.count).toBe(5);
  });
});