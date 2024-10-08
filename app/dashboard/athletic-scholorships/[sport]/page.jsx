'use client'
import React from 'react'
import Map from '@/components/map/Map'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const page = () => {
    const params = useParams().sport

    console.log(params);
    
    const city= [
        {
            name:"Alabama",
            link:"alabama"
        },
        {
            name:"Alaska",
            link:"alaska"
        },
        {
            name:"Arizona",
            link:"arizona"
        },
        {
            name:" Arkansas",
            link:"arkansas"
        },
        {
            name:"California",
            link:"#"
        },
        {
            name:"Colorado",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
        {
            name:"Alabama",
            link:"#"
        },
    
    ]
  return (
    <>
        <div className='text-center'>
            <p className=' py-5 max-sm:text-sm capitalize'><Link href='/dashboard/athletic-scholorships'>Athletic Scholarships</Link> / {params}</p>
            <h1 className='font-bold text-5xl max-md:text-4xl max-sm:text-3xl capitalize'>{params} Scholarships</h1>
        </div>
        <div className='w-[800px] max-xl:w-full mx-auto mt-14  max-sm:hidden'>
            <Map/>
        </div>
        <div  className='grid grid-cols-4 gap-5 py-10 justify-center  mx-auto max-xl:grid-cols-3 w-full  max-lg:grid-cols-2 px-10 max-md:px-4 max-md:gap-4'>
        {
          !city ? "Loading..." :   city &&  city.map((data,index)=>(
         
            <Link scroll={true} key={index} href={params + "/" + data.link} className="py-5 max-sm:text-sm max-sm:p-3 w-full border-2 border-[#012555] rounded-md text-center hover:bg-[#012555] hover:text-white transition-[600ms]">
            {data.name}
            </Link>
        
          ))
        }
            </div>
    </>
  )
}

export default page