import React from 'react'
import { Button, ProductList } from '/Users/emrekardaslar/Desktop/Workspace/Self/component-library/dist/esm'
function ComponentLibraryView() {
    const products = [
        { id: '1', name: 'Product A', price: 10.99 },
        { id: '2', name: 'Product B', price: 20.50 },
        { id: '3', name: 'Product C', price: 5.75 },
    ]
  return (
    <>
        <Button label="Click" />
        <ProductList products={products} />
    </>
  )
}

export default ComponentLibraryView