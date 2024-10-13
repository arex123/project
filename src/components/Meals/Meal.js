import React from 'react'

const Meal = ({item}) => {
  return (
    <div className='border-b-2 pb-2 space-y-2'>
        <p className='font-bold'>{item.name}</p>
        <p className='font-ligh'>{item.desc}</p>
        <p className='font-bold text-[#7F3814]'>${item.price}</p>
    </div>
  )
}

export default Meal