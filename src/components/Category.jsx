import React from 'react'
import {categories} from "../data/data.js"

const Category = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-400 font-bold text-4xl text-center mb-4'>Top Rated Menu Items</h1>
      {/* categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
{categories.map((item, index) => (
    <div key={item.id} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center cursor-pointer hover:scale-105 duration-300 hover:shadow-md">
        <h2 className='font-bold sm:text-xl'>{item.name}</h2>
        <img className="w-20" src={item.image} alt={item.name} />
    </div>
))}
      </div>
    </div>
  )
}

export default Category
