import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../component'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[100px] lg:text-[80px] m:text-[70px] xs:text-[55px] 2xs:text-[40px] 4xs:text-[35px] font-bold my-5 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text text-center xs:my-0'>
          Oops! You seem to be lost.
        </h1>
        <p className='text-xl text-slate-600 text-center max-w-7xl xs:text-md 2xs:max-w-md mb-10 mt-10'>
          Let's Go back to:
        </p>
        <div className='flex gap-10 4xs:gap-4'>
          <Link to='/' className='text-slate-600 hover:text-black'>
            Home
          </Link>
          <Link to='/about' className='text-slate-600 hover:text-black'>
            About
          </Link>
          <Link to='/projects' className='text-slate-600 hover:text-black'>
            Projects
          </Link>
          <Link to='/contact' className='text-slate-600 hover:text-black'>
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}
