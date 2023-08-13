import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className='flex items-center justify-between p-5 w-full text-md px-40 border-b-[1px] border-slate-400 mb-10 sticky top-0 bg-white'>
        <NavLink
          to='/'
          className='font-bold bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text'
        >
          Jinyoung Choi
        </NavLink>
        <div className='flex gap-x-10'>
          <NavLink to='/' className='hover:text-black text-slate-500'>
            Home
          </NavLink>
          <NavLink to='/about' className='hover:text-black text-slate-500'>
            About
          </NavLink>
          <NavLink to='/projects' className='hover:text-black text-slate-500'>
            Projects
          </NavLink>
          <NavLink to='/contact' className='hover:text-black text-slate-500'>
            Contact
          </NavLink>
        </div>
      </div>
    </>
  )
}
