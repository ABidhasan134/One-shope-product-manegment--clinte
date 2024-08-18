import React from 'react'

const ProductCard = ({product,index}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-2">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>{product.Brand_Name}</p>
    <p>{product.short_discription}</p>
    <p>{product.Price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard
