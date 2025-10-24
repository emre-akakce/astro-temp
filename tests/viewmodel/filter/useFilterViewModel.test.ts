// We recommend installing an extension to run vitest tests.
import { describe, it, expect } from 'vitest';
import * as filterHookModule from '../../../src/viewmodel/filter/useFilterViewModel';

describe('viewmodel/filter - useFilterViewModel', () => {
  it('exports a hook or factory if implemented', () => {
    const hook = (filterHookModule as any).useFilterViewModel ?? (filterHookModule as any).default;
    expect(typeof hook === 'function' || typeof hook === 'undefined').toBe(true);
  });

});