import React from 'react'
import {
  knight_001,
  knight_002,
  knight_003,
  knight_004,
  knight_005,
  knight_006,
  knight_007,
  knight_008,
  knight_009,
  knight_010,
  knight_011,
  knight_012,
  knight_013,
  knight_014,
  knight_015,
  knight_016,
  knight_017,
  knight_018,
  knight_019,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import { hover } from '../slices/pageSlice'

export default function Knight() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)

  return (
    <>
      <div className='flex flex-col gap-10 items-center justify-center'>
        <div className='flex gap-10 my-10'>
          <p className='text-[20px] text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>
            Maya
          </p>
          <p className='text-[20px] text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>
            Zbrush
          </p>
          <p className='text-[20px] text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>
            Substance Painter
          </p>
          <p className='text-[20px] text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>
            Marvelous Designer
          </p>
          <p className='text-[20px] text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>
            Marmoset Toolbag 4
          </p>
          <p className='text-[20px] text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>
            Fibershop
          </p>
        </div>
        <p className='mt-2 text-lg leading-8 text-slate-800 mb-10 max-w-6xl'>
          In the realm of 3D modeling, the creation of sophisticated patterns is
          a meticulous process that requires a blend of technical expertise and
          creative finesse. These patterns transcend mere repetition,
          encompassing intricate designs that seamlessly integrate into the 3D
          model's form, texture, and structure.
        </p>
        <div className='grid grid-cols-2 gap-10'>
          <img
            src={knight_001}
            alt='knight_001'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_002}
            alt='knight_002'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_003}
            alt='knight_003'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_004}
            alt='knight_004'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_005}
            alt='knight_005'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_006}
            alt='knight_006'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_007}
            alt='knight_007'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_008}
            alt='knight_008'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_009}
            alt='knight_009'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_010}
            alt='knight_010'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_011}
            alt='knight_011'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_012}
            alt='knight_012'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_013}
            alt='knight_013'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_014}
            alt='knight_014'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_015}
            alt='knight_015'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_016}
            alt='knight_016'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_017}
            alt='knight_017'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_018}
            alt='knight_018'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={knight_019}
            alt='knight_019'
            className='rounded-xl drop-shadow-xl'
          />
        </div>
      </div>
    </>
  )
}
