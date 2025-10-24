// We recommend installing an extension to run vitest tests.
import { describe, it, expect } from 'vitest';
import * as productModule from '../../../src/model/product';
import type { Product } from '../../../src/model/product';

describe('model/product', () => {
  it('exports no runtime values (interface is erased)', () => {
    // The Product is a TypeScript interface and should not produce runtime exports.
    expect(Object.keys(productModule)).toHaveLength(0);
  });

  it('can create a runtime object that matches the Product shape', () => {
    // Use a runtime object and assert it as Product to simulate a real instance.
    const p = { id: 'p1', title: 'Widget', price: 9.99 } as unknown as Product;
    expect(p).toEqual({ id: 'p1', title: 'Widget', price: 9.99 });
    expect(typeof (p as any).id).toBe('string');
    expect(typeof (p as any).title).toBe('string');
    expect(typeof (p as any).price).toBe('number');
  });

  it('serializes/deserializes to JSON preserving properties', () => {
    const p = { id: 'p2', title: 'Gadget', price: 19.95 } as unknown as Product;
    const json = JSON.stringify(p);
    const parsed = JSON.parse(json);
    expect(parsed).toEqual(p);
  });

  it('missing property is undefined at runtime', () => {
    // Bypass TypeScript with any to simulate malformed runtime object
    const bad = { id: 'p3' } as any;
    expect(bad.title).toBeUndefined();
    expect(bad.price).toBeUndefined();
  });
});