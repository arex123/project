import React from 'react'

const CartItem = ({item}) => {
  return (
    <div className='flex justify-between pb-2 border-b-2'>
        <div>
            <p>{item.name}</p>
            <p className='text-sm text-gray-500'>{item.desc}</p>
        </div>
        <div>
            <p>${item.price}/-</p>
            <p>{item.quantity} items</p>
        </div>
    </div>
  )
}

export default CartItem