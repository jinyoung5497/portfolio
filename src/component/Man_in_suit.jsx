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
  marmoset,
  marvelous_designer,
  maya,
  substancepainter,
  zbrush,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import { hover } from '../slices/pageSlice'

export default function Man_in_suit() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)

  return (
    <>
      <div className='flex flex-col gap-10 items-center justify-center'>
        <p className='font-medium text-lg text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text'>
          Tools used
        </p>
        <div className='flex gap-10 mb-10'>
          <img src={maya} alt='maya' className='h-20' />
          <img src={zbrush} alt='zbrush' className='h-20' />
          <img src={substancepainter} alt='substancepainter' className='h-20' />
          <img
            src={marvelous_designer}
            alt='marvelous_designer'
            className='h-20'
          />
          <img src={marmoset} alt='marmoset' className='h-20' />
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
