import React, { useContext, useState } from 'react'
import OrderModal from '../Cart/Cart'
import CartContext from '../../store/store-context'

const Header = () => {
  const ctx = useContext(CartContext)

  let qnt = 0
  ctx.items.forEach(item=>{
    qnt=Number(qnt)+Number(item.quantity)
  })
  console.log("ctx ",ctx)

  const [cartModal,setCartModal] = useState(false)
  const handleCartModal = ()=>{
    setCartModal(!cartModal)
  }
  return (
    <div className='bg-red-600 text-white flex justify-around p-2 items-center'>
        <div className=''>
            <h2 className='text-2xl font-bold'>FoodMeals</h2>
        </div>
        <div onClick={handleCartModal}> 
            <div className='flex font-semibold cursor-pointer bg-red-900 items-center rounded p-4 space-x-2'>
                <p>Your Cart</p>
                <p className='bg-red-500 rounded-3xl px-3'>{qnt}</p>
            </div>
        </div>
        {cartModal && <OrderModal onClose={handleCartModal}/>}
    
    </div>
  )
}

export default Header