import React from 'react'
import logo from '@/assets/navbar/logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
        <div className='p-4 flex items-center justify-between'>
            <Image src={logo} alt='img' width={180} height={50}/>
            <ul className='flex items-center gap-4'>
                <li>Home</li>
                <li>Free Recruiting Tips</li>
                <li>Pricing</li>
                <li>Customer Support</li>
            </ul>
            <button>Login</button>
        </div>
    </>
  )
}

export default Navbar