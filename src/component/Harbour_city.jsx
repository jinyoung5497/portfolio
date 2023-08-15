import React from 'react'
import {
  harbour_city_001,
  harbour_city_002,
  harbour_city_003,
  harbour_city_004,
  harbour_city_005,
  harbour_city_006,
  harbour_city_007,
  harbour_city_008,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'

export default function Harbour_city() {
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
            Zbrush
          </p>
          <p className='text-[20px] 3xs:text-md text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>
            Substance Painter
          </p>
          <p className='text-[20px] 3xs:text-md text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>
            Unreal
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
          src={harbour_city_001}
          alt='harbour_city_001'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={harbour_city_002}
          alt='harbour_city_002'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={harbour_city_003}
          alt='harbour_city_003'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={harbour_city_004}
          alt='harbour_city_004'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={harbour_city_005}
          alt='harbour_city_005'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={harbour_city_006}
          alt='harbour_city_006'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={harbour_city_007}
          alt='harbour_city_007'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={harbour_city_008}
          alt='harbour_city_008'
          className='rounded-xl drop-shadow-xl'
        />
      </div>
    </>
  )
}
