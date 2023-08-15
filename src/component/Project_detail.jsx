import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hover, projectIndex } from '../slices/pageSlice'
import { NavLink } from 'react-router-dom'
import {
  General,
  Xwave,
  Uss_europa,
  Old_wagon,
  Lost_temple,
  Harbour_city,
  Assassin,
  Scifi_girl,
  Knight,
  Man_in_suit,
  Grenade,
  Kanban,
  Connect_four,
  Multi_step,
} from '../component'

export default function Project_detail() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)

  const back = () => {
    dispatch(hover())
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[100px] font-bold bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text mb-10'>
          {page.title}
        </h1>
        {page.hover && (
          <p className='text-xl text-slate-600 text-center max-w-7xl mb-10'>
            Explore the intersection of design, functionality, and imagination
            as you navigate through this showcase of my work. Each project
            stands as a polished gem, reflecting the commitment to excellence
            and the relentless pursuit of pushing boundaries.
          </p>
        )}
        <div className='flex gap-10 mb-10'>
          {page.modelling ? (
            <a
              href='https://jin5497.artstation.com/'
              className='h-12 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg p-5 flex items-center hover:text-white px-12 font-medium border-[1px] border-fuchsia-500'
            >
              ArtStation
            </a>
          ) : (
            <a
              href='https://github.com/jinyoung5497'
              className='h-12 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg p-5 flex items-center hover:text-white px-12 font-medium border-[1px] border-fuchsia-500'
            >
              Github
            </a>
          )}
          <NavLink
            to='/projects'
            onClick={back}
            className='h-12 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-lg p-5 flex items-center hover:text-white px-12 font-medium border-[1px] border-blue-500'
          >
            More Projects
          </NavLink>
        </div>
        {page.projectIndex == 0 && <General />}
        {page.projectIndex == 1 && <Xwave />}
        {page.projectIndex == 2 && <Uss_europa />}
        {page.projectIndex == 3 && <Old_wagon />}
        {page.projectIndex == 4 && <Lost_temple />}
        {page.projectIndex == 5 && <Harbour_city />}
        {page.projectIndex == 6 && <Assassin />}
        {page.projectIndex == 7 && <Scifi_girl />}
        {page.projectIndex == 8 && <Knight />}
        {page.projectIndex == 9 && <Man_in_suit />}
        {page.projectIndex == 10 && <Grenade />}
        {page.projectIndex == 11 && <Kanban />}
        {page.projectIndex == 12 && <Connect_four />}
        {page.projectIndex == 13 && <Multi_step />}
        <NavLink
          to='/projects'
          onClick={back}
          className='h-12 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-lg p-5 flex items-center hover:text-white px-12 font-medium border-[1px] border-blue-500 mt-10'
        >
          More Projects
        </NavLink>
      </div>
    </>
  )
}
