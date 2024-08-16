import React from 'react'

const ProductRow = ({product,index}) => {
    console.log(product)
  return (
    <tr>
        <th>{index+1}</th>
        <td>{product.Brand_Name}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
  )
}

export default ProductRow
