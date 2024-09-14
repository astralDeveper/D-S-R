import HomeCard from '@/components/dashboard/HomeCard'
import React from 'react'
import companyLogo from '@/assets/dashboard/company-logo.png'
import HomeCard2 from '@/components/dashboard/HomeCard2'

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

  const cardArr2 = [
    {
      head: "USSSA World  Fastpitch Championship",
      date: "07/14/2024 - 07/19/2024",
      city: "Kanas City, KS"
    },
    {
      head: "USSSA World  Fastpitch Championship",
      date: "07/14/2024 - 07/19/2024",
      city: "Kanas City, KS"
    },
    {
      head: "USSSA World  Fastpitch Championship",
      date: "07/14/2024 - 07/19/2024",
      city: "Kanas City, KS"
    },
    {
      head: "USSSA World  Fastpitch Championship",
      date: "07/14/2024 - 07/19/2024",
      city: "Kanas City, KS"
    },
    {
      head: "USSSA World  Fastpitch Championship",
      date: "07/14/2024 - 07/19/2024",
      city: "Kanas City, KS"
    },
    {
      head: "USSSA World  Fastpitch Championship",
      date: "07/14/2024 - 07/19/2024",
      city: "Kanas City, KS"
    },
  ]
  return (
    <>
    <div className=''>
      <div className='mt-4 grid grid-cols-[55%_auto] gap-6 max-lg:grid-cols-1'>
        <div className=''>
          <h2 className='text-lg font-semibold'>Favorites</h2>
          <div className='h-[900px] overflow-y-auto'>
            <div className='flex flex-col gap-6 mt-6 '>
              {cardArr.map((item, index)=>{
                return <HomeCard image={item.image} head={item.head} description={item.description} web={item.web} location={item.location} tuitionCost={item.tuitionCost} acceptanceRate={item.acceptanceRate} key={index}/>
              })}   
            </div>
          </div>
        </div>
        <div className=''>
          <h2 className='text-lg font-semibold'>My Events</h2>
          <div className='h-[900px] overflow-y-auto mt-6'>
            <div className='flex flex-col gap-6  '>
              {cardArr2.map((item)=>{
                return <HomeCard2/>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page