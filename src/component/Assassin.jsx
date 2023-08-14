import React from 'react'
import {
  assassin_001,
  assassin_002,
  assassin_003,
  assassin_004,
  assassin_005,
  assassin_006,
  assassin_007,
  assassin_008,
  assassin_009,
  assassin_010,
  assassin_011,
  assassin_012,
  assassin_013,
  assassin_014,
  assassin_015,
  assassin_016,
  assassin_017,
  assassin_018,
  assassin_019,
  assassin_020,
  // marmoset,
  // marvelous_designer,
  // maya,
  // substancepainter,
  // zbrush,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import { hover } from '../slices/pageSlice'

export default function Assassin() {
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
          <img src={zbrush} alt='zbrush' className='h-20' />
          <img src={substancepainter} alt='substancepainter' className='h-20' />
          <img
            src={marvelous_designer}
            alt='marvelous_designer'
            className='h-20'
          />
          <img src={marmoset} alt='marmoset' className='h-20' />
        </div> */}
        <img
          src={assassin_001}
          alt='assassin_001'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_002}
          alt='assassin_002'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_003}
          alt='assassin_003'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_004}
          alt='assassin_004'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_005}
          alt='assassin_005'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_006}
          alt='assassin_006'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_007}
          alt='assassin_007'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_008}
          alt='assassin_008'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_009}
          alt='assassin_009'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_010}
          alt='assassin_010'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_011}
          alt='assassin_011'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_012}
          alt='assassin_012'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_013}
          alt='assassin_013'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_014}
          alt='assassin_014'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_015}
          alt='assassin_015'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_016}
          alt='assassin_016'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_017}
          alt='assassin_017'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_018}
          alt='assassin_018'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_019}
          alt='assassin_019'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={assassin_020}
          alt='assassin_020'
          className='rounded-xl drop-shadow-xl'
        />
      </div>
    </>
  )
}
