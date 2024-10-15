import React, { useContext } from 'react'
import CartContext from '../../store/store-context'

const CartItem = ({item}) => {
    const ctx = useContext(CartContext)

    const handleDescreaseItem=()=>{
        // console.log("ctx" ,ctx)
        ctx.removeItem(item.id)
    }
    const handleIncreaseItem=()=>{
        ctx.addItem(item)
    }

    const handleDeleteItem=()=>{
        ctx.deleteItem(item.id)
    }
  return (
    <div className='flex justify-between pb-2 border-b-2'>
        <div>
            <p>{item.name}</p>
            <p className='text-sm text-gray-500'>${item.price}/-</p>
        </div>
        <div className='flex flex-col items-end'>
            <p>x {item.quantity}</p>
            <div className='flex items-center space-x-2 mt-5'>

                <p onClick={handleIncreaseItem} className='p-1 px-4 cursor-pointer hover:bg-red-300 rounded-lg text-xl  bg-white border '>+</p>
                <p onClick={handleDescreaseItem} className='p-1 px-4 cursor-pointer hover:bg-red-300 text-white rounded-lg text-xl bg-red-500 '>-</p>
                <i onClick={handleDeleteItem} class="text-2xl fa fa-trash" aria-hidden="true"></i>

            </div>
        </div>
    </div>
  )
}

export default CartItem