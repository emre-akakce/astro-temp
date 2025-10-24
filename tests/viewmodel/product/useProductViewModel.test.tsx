// @vitest-environment jsdom
import React from 'react';
import { render, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useProductViewModel } from '../../../src/viewmodel/product/useProductViewModel';
import { ProductProvider } from '../../../src/viewmodel/product/ProductContext';
import { FilterProvider } from '../../../src/viewmodel/filter/FilterContext';


describe('useProductViewModel (Component Integration Simplified)', () => {
  it('returns the correct runtime shape when called inside a component', async () => {

    // Capture hook result from inside a component
    let hookResult: any;

    // Simplified Test Component
    const TestComponent = ({ init }: any) => {
      hookResult = useProductViewModel();
      return null;
    };

    // 1. Define Provider Value
    const productInitialState = {
      count: 5,
      products: [
        { id: 'p1', title: 'Product 1', price: 100 },
        { id: 'p2', title: 'Product 2', price: 200 },
      ],
      productsLoading: true,
    };
    
    await act(async () => {
      render(
        <ProductProvider initialState={productInitialState}>
          <FilterProvider>
            {/* We assume the hook takes an object with a productId */}
            <TestComponent init={{ productId: 'p1' }} />
          </FilterProvider>
        </ProductProvider>
      );
    });

    // 3. Simplify State Extraction and Assertion
    expect(hookResult).toBeDefined();

    // Standard extraction assuming hook returns an object or [state, actions]
    let state = hookResult;
    if (Array.isArray(hookResult)) {
      state = hookResult[0]; // If it returns [state, actions]
    }

    expect(state).toBeDefined();
    expect(state.count).toBe(5);    
    expect(state.products.length).toBe(2);
    expect(state.productsLoading).toBe(true);
  });
});