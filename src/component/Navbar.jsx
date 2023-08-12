import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className='flex items-center justify-between p-5 w-full text-md px-40 border-b-[1px] border-slate-400 mb-10'>
        <NavLink to='/' className='font-bold'>
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
