// @vitest-environment jsdom
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, act, waitFor } from '@testing-library/react';

// Mock the repository module BEFORE importing the provider/hook.
// Ensure the factory does not reference top-level variables (vi.mock is hoisted).
vi.mock('../../../src/repositories/filterRepository', () => {
  const mockFilters = [
    { label: 'All', value: 'all' },
    { label: 'Category 1', value: 'cat1' },
  ];
  return {
    getFilters: vi.fn().mockResolvedValue(mockFilters),
  };
});

// Now import the provider and hook (after the mock)
import { FilterProvider } from '../../../src/viewmodel/filter/FilterContext';
import { useFilterViewModel } from '../../../src/viewmodel/filter/useFilterViewModel';

describe('viewmodel/filter - useFilterViewModel', () => {
  it('should fetch and set available filters on mount', async () => {
    // Import the mocked module to assert calls
    const repo = await import('../../../src/repositories/filterRepository');

    // Render a test component that uses the useFilterViewModel hook
    let hookResult: any;
    const TestComponent = () => {
      hookResult = useFilterViewModel();
      return null;
    };

    await act(async () => {
      render(
        <FilterProvider>
          <TestComponent />
        </FilterProvider>
      );
    });

    // Wait for the hook's effect to call the repository
    await waitFor(() => {
      expect(repo.getFilters).toHaveBeenCalled();
    });

    // Retrieve the resolved value from the mock's first call (the hook called it)
    const firstCallPromise = (repo.getFilters as any).mock.results[0]?.value;
    const expected = firstCallPromise ? await firstCallPromise : undefined;

    // Assert that availableFilters in the hook state matches the mock data returned by the repo
    expect(hookResult.availableFilters).toEqual(expected);
  });

  it('should allow selecting a filter', async () => {
    // Render a test component that uses the useFilterViewModel hook
    let hookResult: any;
    const TestComponent = () => {
      hookResult = useFilterViewModel();
      return null;
    };

    await act(async () => {
      render(
        <FilterProvider>
          <TestComponent />
        </FilterProvider>
      );
    });

    // Initially, no filter should be selected
    expect(hookResult.selectedFilter).toBe("");

    // Select a filter
    act(() => {
      hookResult.dispatchEvent('SET_SELECTED_FILTER', 'cat1');
    });

    // Assert that the selected filter is updated
    expect(hookResult.selectedFilter).toBe('cat1');
  });
});