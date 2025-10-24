// We recommend installing an extension to run vitest tests.
import { describe, it, expect } from 'vitest';
import * as filterModule from '../../../src/model/filter';
import type { Filter } from '../../../src/model/filter';

describe('model/filter', () => {
  it('exports no runtime values (interface is erased)', () => {
    // The Filter is a TypeScript interface and should not produce runtime exports.
    expect(Object.keys(filterModule)).toHaveLength(0);
  });

  it('can create a runtime object that matches the Filter shape', () => {
    const f: Filter = { id: '1', name: 'Status', value: 'active' };
    expect(f).toEqual({ id: '1', name: 'Status', value: 'active' });
    expect(typeof f.id).toBe('string');
    expect(typeof f.name).toBe('string');
    expect(typeof f.value).toBe('string');
  });

  it('serializes/deserializes to JSON preserving properties', () => {
    const f: Filter = { id: '2', name: 'Category', value: 'books' };
    const json = JSON.stringify(f);
    const parsed = JSON.parse(json);
    expect(parsed).toEqual(f);
  });

  it('missing property is undefined at runtime', () => {
    // Bypass TypeScript with any to simulate malformed runtime object
    const bad = { id: '3', name: 'Incomplete' } as any;
    expect(bad.value).toBeUndefined();
  });
});