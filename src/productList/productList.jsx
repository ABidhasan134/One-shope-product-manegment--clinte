import React from 'react'
import useProduct from '../hook/useProduct';

const ProductList = () => {
    const [products]=useProduct();
    console.log(products);
    console.log('ProductList')
  return (
    <div>
      productList
    </div>
  )
}

export default ProductList
