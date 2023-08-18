import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { hoverTrue } from '../slices/pageSlice'
import { FeaturedSkill, Footer } from '../component'

/**
 * Home recent work 3 of them
 * IFB398, IFB200, new game
 * Animations, Game prototypes
 * kor version
 *
 */

export default function Home() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)

  const hoverFalses = () => {
    dispatch(hoverTrue())
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center flex-col gap-12 mx-32 m:mx-20 sm:mx-16 2xs:mx-10 3xl:gap-5'>
        <h1 className='text-[100px] lg:text-[80px] m:text-[70px] xs:text-[55px] 2xs:text-[40px] 4xs:text-[35px] font-bold my-5 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text text-center xs:my-0'>
          Jinyoung Choi
        </h1>
        <p className='text-xl text-slate-600 text-center max-w-7xl xs:text-md 2xs:max-w-md'>
          Welcome to my portfolio! I specialise in the art of 3D modeling and
          scripting. Here you will find a showcase of my polished projects and
          prototypes!
        </p>
        <div className='flex gap-10 mb-10 xs:gap-4 xs:mb-0'>
          <a
            href='https://jin5497.artstation.com/'
            className='h-12 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg p-5 flex justify-center items-center hover:text-white px-10 font-medium border-[1px] border-fuchsia-500 xs:px-4 w-40 xs:w-32 3xs:w-24 3xs:p-4 3xs:px-10 4xs:w-20  xs:text-sm xs:h-3 self-center'
          >
            ArtStation
          </a>
          <NavLink
            to='/projects'
            onClick={hoverFalses}
            className='h-12 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 rounded-lg p-5 flex justify-center items-center text-white px-12 font-medium border-[1px] xs:px-4 w-40 xs:w-32 3xs:w-24 3xs:p-4 3xs:px-10 4xs:w-20  xs:text-sm xs:h-3 self-center'
          >
            Projects
          </NavLink>
          <a
            href='https://github.com/jinyoung5497'
            className='h-12 hover:bg-gradient-to-r hover:from-violet-500 hover:to-cyan-500 rounded-lg p-5 flex justify-center items-center hover:text-white px-12 font-medium border-[1px] border-violet-500 xs:px-4 w-40 xs:w-32 3xs:w-24 3xs:p-4 3xs:px-10 4xs:w-20  xs:text-sm xs:h-3 self-center'
          >
            Github
          </a>
        </div>

        <div className='flex flex-col items-center gap-10 w-full mb-10'>
          <FeaturedSkill />
        </div>
      </div>
      <Footer />
    </>
  )
}
