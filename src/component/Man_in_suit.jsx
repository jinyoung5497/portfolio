import React from 'react'
import {
  man_in_suit_001,
  man_in_suit_002,
  man_in_suit_003,
  man_in_suit_004,
  man_in_suit_005,
  man_in_suit_006,
  man_in_suit_007,
  man_in_suit_008,
  man_in_suit_009,
  man_in_suit_010,
  man_in_suit_011,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import { hover } from '../slices/pageSlice'

export default function Man_in_suit() {
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
            Marvelous Designer
          </p>
          <p className='text-[20px] 3xs:text-md text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>
            Marmoset Toolbag 4
          </p>
          <p className='text-[20px] 3xs:text-md text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>
            Fibershop
          </p>
        </div>
        <img
          src={man_in_suit_001}
          alt='man_in_suit_001'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={man_in_suit_002}
          alt='man_in_suit_002'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={man_in_suit_003}
          alt='man_in_suit_003'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={man_in_suit_004}
          alt='man_in_suit_004'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={man_in_suit_005}
          alt='man_in_suit_005'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={man_in_suit_006}
          alt='man_in_suit_006'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={man_in_suit_007}
          alt='man_in_suit_007'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={man_in_suit_008}
          alt='man_in_suit_008'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={man_in_suit_009}
          alt='man_in_suit_009'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={man_in_suit_010}
          alt='man_in_suit_010'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={man_in_suit_011}
          alt='man_in_suit_011'
          className='rounded-xl drop-shadow-xl'
        />
      </div>
    </>
  )
}
