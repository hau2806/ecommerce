import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

const Store = () => {
  const products = useSelector((state: RootState) => state.loopStore.addToWishlist);
  return (
    <div>
      {products.map((product) => (
        <h1>{product.name}</h1>
      ))}
    </div>
  )
}

export default Store
