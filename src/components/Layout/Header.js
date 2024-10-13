import React from 'react'

const Header = () => {
  return (
    <div className='bg-red-600 text-white flex justify-around p-2 items-center'>
        <div className=''>
            <h2 className='text-2xl font-bold'>FoodMeals</h2>
        </div>
        <div>
            <div className='flex font-semibold bg-red-900 items-center rounded p-4 space-x-2'>
                <p>Your Cart</p>
                <p className='bg-red-500 rounded-3xl px-3'>0</p>
            </div>
        </div>
    </div>
  )
}

export default Header