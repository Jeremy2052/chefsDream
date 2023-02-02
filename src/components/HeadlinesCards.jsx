import React from 'react'
import egg_toast from "../img/egg_toast.jpg"
import blueberry_waffles from "../img/blueberry_waffles.jpg"
import burger_sides from "../img/burger_sides.jpg"

const HeadlinesCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* card */}
      <div className='rounded-xl relative hover:scale-105 ease-in duration-300'>
        <div className='absolute w-full h-full bg-black/40  text-white cursor-pointer hover:bg-slate-200/0 hover:shadow-lg'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 7/14</p>
            <button className='border-none bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-300'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover' src={egg_toast} alt="/" />
      </div>

      <div className='rounded-xl relative hover:scale-105 ease-in duration-300'>
        <div className='absolute w-full h-full bg-black/40  text-white cursor-pointer hover:bg-slate-200/0 hover:shadow-lg'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restraurants</p>
            <p className='px-2'>Added Daily</p>
            <button className='border-none bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-300'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover' src={burger_sides} alt="/" />
      </div>

      <div className='rounded-xl relative hover:scale-105 ease-in duration-300'>
        <div className='absolute w-full h-full bg-black/40  text-white cursor-pointer hover:bg-slate-200/0 hover:shadow-lg'>
            <p className='font-bold text-2xl px-2 pt-4'>We Deliver Deserts Too</p>
            <p className='px-2'>Tasty Treats</p>
            <button className='border-none bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-300'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover' src={blueberry_waffles} alt="/" />
      </div>
    </div>
  )
}

export default HeadlinesCards
