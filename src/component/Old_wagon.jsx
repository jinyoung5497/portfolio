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
  // marmoset,
  // maya,
  // substancepainter,
  // zbrush,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import { hover } from '../slices/pageSlice'

export default function Old_wagon() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)

  return (
    <>
      <div className='flex flex-col gap-10 items-center justify-center'>
        <p className='font-medium text-lg text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text'>
          Tools used
        </p>
        {/* <div className='flex gap-10 mb-10'>
          <img src={maya} alt='maya' className='h-20' />
          <img src={substancepainter} alt='substancepainter' className='h-20' />
          <img src={zbrush} alt='zbrush' className='h-20' />
          <img src={marmoset} alt='marmoset' className='h-20' />
        </div> */}
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
