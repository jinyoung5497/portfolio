import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { hoverFalse, modelling } from '../slices/pageSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)

  const hoverFalses = () => {
    dispatch(hoverFalse())
    dispatch(modelling())
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <div className='flex items-center justify-between p-5 w-full text-md px-40 border-b-[1px] border-slate-400 mb-10 sticky top-0 bg-white z-10'>
        <NavLink
          to='/'
          onClick={window.scrollTo({ top: 0 })}
          className='font-bold bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text'
        >
          Jinyoung Choi
        </NavLink>
        <div className='flex gap-x-10'>
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
