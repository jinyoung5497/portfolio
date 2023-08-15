import React from 'react'
import {
  uss_europa_001,
  uss_europa_002,
  uss_europa_003,
  uss_europa_004,
  uss_europa_005,
  uss_europa_006,
  uss_europa_007,
  uss_europa_008,
  uss_europa_009,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import { hover } from '../slices/pageSlice'

export default function Uss_europa() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)

  return (
    <>
      <div className='flex flex-col gap-10 items-center justify-center 3xs:gap-5'>
        <div className='flex gap-10 my-10 3xs:gap-5 flex-wrap items-center justify-center'>
          <p className='text-[20px] 3xs:text-md text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>
            Maya
          </p>
          <p className='text-[20px] 3xs:text-md text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>
            Substance Painter
          </p>
          <p className='text-[20px] 3xs:text-md text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>
            Photoshop
          </p>
        </div>
        <p className='mt-2 text-lg leading-8 text-slate-800 mb-10 max-w-6xl'>
          Custom textures play a pivotal role in evoking emotions and immersing
          the audience in a virtual world. Whether it's the weathered wood of an
          ancient structure or the glistening sheen of a futuristic spacecraft,
          custom textures elevate digital art to a new level of realism and
          artistic expression. Through the skillful application of textures,
          artists breathe life into their creations, turning mere digital
          surfaces into tangible, sensory experiences.
        </p>
        <img
          src={uss_europa_001}
          alt='uss_europa_001'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={uss_europa_002}
          alt='uss_europa_002'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={uss_europa_003}
          alt='uss_europa_003'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={uss_europa_004}
          alt='uss_europa_004'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={uss_europa_005}
          alt='uss_europa_005'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={uss_europa_006}
          alt='uss_europa_006'
          className='rounded-xl drop-shadow-xl'
        />
        <div className='grid grid-cols-2 gap-10 lg:flex lg:flex-col'>
          <img
            src={uss_europa_007}
            alt='uss_europa_007'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={uss_europa_008}
            alt='uss_europa_008'
            className='rounded-xl drop-shadow-xl'
          />
        </div>
        <img
          src={uss_europa_009}
          alt='uss_europa_009'
          className='rounded-xl drop-shadow-xl'
        />
      </div>
    </>
  )
}
