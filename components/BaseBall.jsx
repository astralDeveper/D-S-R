import React from 'react'

const BaseBall = () => {
  return (
    <>
    <div className='bg-[#012555] '>
      <div className=' flex  flex-col py-20 max-w-screen-2xl px-10 max-md:px-4 mx-auto justify-center items-center text-white' >
        <h3 className='lg:text-[2.5rem] sm:text-[2rem] text-[1rem]'>We focus soley on</h3>
        <h1 className='lg:text-[3.5rem] sm:text-[2.5rem] text-[1.5rem] py-7 font-bold'>Baseball & Softball Athletes</h1>
        <div className='flex gap-5'>
            <button className='border-white border-2 rounded-lg p-2 bg-white text-[#012555] font-semibold'>Get Recruited</button>
            <button className='border-white border-2 rounded-lg p-2'>Join Today</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default BaseBall