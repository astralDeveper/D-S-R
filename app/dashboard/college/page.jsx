'use client'
import HomeCard from '@/components/dashboard/HomeCard';
import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import companyLogo from '@/assets/dashboard/company-logo.png'
const page = () => {
  const cardArr = [
    {
      image: companyLogo,
      head: "Florida Institute of Technnology",
      web: "fsu.edu",
      location: "fsu.edu",
      description : "FSU, designated a preeminent university in the state of Florida, is one of the most respected research and learning institutions in the country.",
      tuitionCost : "$6,540/year",
      acceptanceRate : "44%"
    },
    {
      image: companyLogo,
      head: "Florida Institute of Technnology",
      web: "fsu.edu",
      location: "fsu.edu",
      description : "FSU, designated a preeminent university in the state of Florida, is one of the most respected research and learning institutions in the country.",
      tuitionCost : "$6,540/year",
      acceptanceRate : "44%"
    },
    {
      image: companyLogo,
      head: "Florida Institute of Technnology",
      web: "fsu.edu",
      location: "fsu.edu",
      description : "FSU, designated a preeminent university in the state of Florida, is one of the most respected research and learning institutions in the country.",
      tuitionCost : "$6,540/year",
      acceptanceRate : "44%"
    },
  ]
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    
    <div className='grid grid-cols-[30%_auto] gap-6 max-xl:grid-cols-1 '>
      {/* filter  */}
      <div className='bg-white p-4 w-full'>
        <h1 className='text-3xl font-semibold'>Filters</h1>
        <form className='flex flex-col max-xl:flex-row max-xl:flex-wrap max-xl:gap-10'> 
          <div>

        
      <h1 className='text-xl font-medium my-5'>Study Duration</h1>
      <input type="checkbox" id="duration-4year" />
      <label htmlFor="duration-4year" className='pl-2'>4 Year</label>
      <br />
      <input type="checkbox" id="duration-2year" />
      <label htmlFor="duration-2year" className='pl-2'>2 Year</label>
      <br />
      </div>

      <div>
      <h1 className='text-xl font-medium my-5'>Majors</h1>
      <input type="checkbox" id="major-english" />
      <label htmlFor="major-english" className='pl-2'>English</label>
      <br />

      <input type="checkbox" id="major-education" />
      <label htmlFor="major-education" className='pl-2'>Education</label>
      <br />

      <input type="checkbox" id="major-engineering" />
      <label htmlFor="major-engineering" className='pl-2'>Engineering Technology</label>
      <br />
      <input type="checkbox" id="major-business" />
          <label htmlFor="major-business" className='pl-2'>Business Marketing</label>
          <br />

          <input type="checkbox" id="major-social" />
          <label htmlFor="major-social" className='pl-2'>Social Technology</label>
          <br />

      {showMore && (
        <>
          <input type="checkbox" id="major-business" />
          <label htmlFor="major-business"className='pl-2'>Business Marketing</label>
          <br />

          <input type="checkbox" id="major-social" />
          <label htmlFor="major-social" className='pl-2'>Social Technology</label>
          <br />
        </>
      )}

      <p style={{ cursor: 'pointer', color: 'blue' }} onClick={handleToggle}>
        {showMore ? 'See Less' : 'See More (40)'}
      </p>

      </div>

      <div>

      

      <h1 className='text-xl font-medium my-5'>College Type</h1>
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>Public</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>Private</label>
        <br />

      <h1 className='text-xl font-medium my-5'>Cost</h1>
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>$10</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>$100</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>$1000</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>$10000</label>
      </div>

      <div>

      
      <h1 className='text-xl font-medium my-5'>Student Body Size</h1>
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>Small</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>Medium</label>

      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>Large</label>
      
      <br />
      <h1 className='text-xl font-medium my-5'>Speciality</h1>
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>HBCU</label>

      </div>

      <div>

      
      <h1 className='text-xl font-medium my-5'>Acceptance Rate</h1>
      <div className='flex items-center'>
      <input type="number" name="" id="" className='bg-white rounded-2xl border-2 border-gray-300 px-5 text-center py-2 w-20' />
      <p className='font-semibold px-5'>-</p>
      <input type="number" name="" id="" className='bg-white rounded-2xl border-2 border-gray-300 px-5 text-center py-2 w-20' />
      </div>
      </div>

      <div>

      
      <h1 className='text-xl font-medium my-5'>Sports Division</h1>
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>NCAA D1</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>NCAA D2</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>NCAA D3</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>NAIA</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>JUCO</label>
      </div>
      <div>

      

      <h1 className='text-xl font-medium my-5'>Graduation Year</h1>
      <input type="number" name="" id="" className='rounded-2xl bg-white border-2 border-gray-300 px-5 text-center py-2 ' />
      </div>

      <div>

      
      <h1 className='text-xl font-medium my-5'>Your Positions</h1>
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>P</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>C</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>1B</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>2B</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>3B</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>SS</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>LF</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>CF</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="" className='pl-2'>RF</label>
      </div>
    </form>
      </div>

      <div className='w-full'>
        <div className='flex bg-white border py-1 w-full border-[#012555] rounded-2xl items-center '>
        <IoSearchOutline className='pl-4 text-4xl'/>
        <input type="text" name="" id="" className='pl-4 outline-none' placeholder='Search here...'/>
        </div>
        <div className='flex flex-col gap-6 mt-6'>
          {
            cardArr && cardArr.map((item,index)=>(
              <HomeCard image={item.image} head={item.head} description={item.description} web={item.web} location={item.location} tuitionCost={item.tuitionCost} acceptanceRate={item.acceptanceRate} key={index}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default page