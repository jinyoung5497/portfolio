import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { hoverFalse } from '../slices/pageSlice'

export default function Footer() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)
  const [year, setYear] = useState(2023)

  const hoverFalses = () => {
    // dispatch(hoverFalse())
    window.scrollTo({ top: 0 })
  }

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    setYear(currentYear)
  }, [])

  return (
    <>
      <div className='bg-black-light w-full h-64 mt-20 flex items-center justify-center place-content-around'>
        <NavLink
          to='/'
          className='font-bold bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text'
        >
          Jinyoung Choi
        </NavLink>
        <div className='mx-40 text-white flex items-center justify-center gap-10 text-lg'>
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
              onClick={hoverFalses}
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
        <div className='flex flex-col gap-3 text-md'>
          <p className='text-slate-500'>© {year} by Jinyoung Choi.</p>
          <p className='text-slate-500'>jinyoung5497@gmail.com</p>
        </div>
      </div>
    </>
  )
}
