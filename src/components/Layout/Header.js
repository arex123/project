import React, { useState } from 'react'
import OrderModal from '../UI/OrderModal'

const Header = () => {
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
                <p className='bg-red-500 rounded-3xl px-3'>0</p>
            </div>
        </div>
        {cartModal && <OrderModal onClose={handleCartModal}/>}
    
    </div>
  )
}

export default Header