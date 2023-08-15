import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { hoverTrue, modelling } from '../slices/pageSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)

  const hoverFalses = () => {
    dispatch(hoverTrue())
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <div className='flex items-center justify-between p-5 w-full text-md px-40 xl:px-32 lg:px-20 border-b-[1px] border-slate-400 mb-10 sticky top-0 bg-white z-10 xs:text-sm 2xs:px-10 3xs:text-[10px] 3xs:mb-5 4xs:px-3'>
        <NavLink
          to='/'
          onClick={window.scrollTo({ top: 0 })}
          className='font-bold bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text'
        >
          Jinyoung Choi
        </NavLink>
        <div className='flex gap-x-10 xs:gap-x-4 4xs:gap-x-2'>
          <NavLink
            to='/'
            onClick={window.scrollTo({ top: 0 })}
            className='hover:text-black text-slate-500'
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            onClick={window.scrollTo({ top: 0 })}
            className='hover:text-black text-slate-500'
          >
            About
          </NavLink>
          <NavLink
            to='/projects'
            onClick={hoverFalses}
            className='hover:text-black text-slate-500'
          >
            Projects
          </NavLink>
          <NavLink
            to='/contact'
            onClick={window.scrollTo({ top: 0 })}
            className='hover:text-black text-slate-500'
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  )
}
