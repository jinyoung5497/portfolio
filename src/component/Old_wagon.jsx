import React from 'react'
import {
  old_wagon_001,
  old_wagon_002,
  old_wagon_003,
  old_wagon_004,
  old_wagon_005,
  old_wagon_006,
  old_wagon_007,
  old_wagon_008,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import { hover } from '../slices/pageSlice'

export default function Old_wagon() {
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
            Marmoset Toolbag 4
          </p>
        </div>
        <img
          src={old_wagon_001}
          alt='old_wagon_001'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={old_wagon_002}
          alt='old_wagon_002'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={old_wagon_003}
          alt='old_wagon_003'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={old_wagon_004}
          alt='old_wagon_004'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={old_wagon_005}
          alt='old_wagon_005'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={old_wagon_006}
          alt='old_wagon_006'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={old_wagon_007}
          alt='old_wagon_007'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={old_wagon_008}
          alt='old_wagon_008'
          className='rounded-xl drop-shadow-xl'
        />
      </div>
    </>
  )
}
