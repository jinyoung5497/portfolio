import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className='bg-black-light w-full h-64 mt-20 flex items-center justify-center'>
        <div className='mx-40 text-white flex items-center justify-center gap-10 text-lg'>
          <NavLink
            to='/'
            className='font-bold bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text'
          >
            Jinyoung Choi
          </NavLink>
          <div className='flex gap-10'>
            <a
              href='https://jin5497.artstation.com/'
              className='text-slate-500 hover:text-blue-500'
            >
              Artstation
            </a>
            <a
              href='https://github.com/jinyoung5497'
              className='text-slate-500 hover:text-green-500'
            >
              Github
            </a>
          </div>
          <div className='flex gap-10'>
            <NavLink
              to='/about'
              className='hover:text-purple-600 text-slate-500'
            >
              About
            </NavLink>
            <NavLink
              to='/projects'
              className='hover:text-cyan-500 text-slate-500'
            >
              Projects
            </NavLink>
            <NavLink
              to='/contact'
              className='hover:text-teal-600 text-slate-500'
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
