import React from 'react'
import {
  scifi_girl_001,
  scifi_girl_002,
  scifi_girl_003,
  scifi_girl_004,
  scifi_girl_005,
  scifi_girl_006,
  scifi_girl_007,
  scifi_girl_008,
  scifi_girl_009,
  scifi_girl_010,
  scifi_girl_011,
  scifi_girl_012,
  scifi_girl_013,
  scifi_girl_014,
  marmoset,
  marvelous_designer,
  maya,
  substancepainter,
  zbrush,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import { hover } from '../slices/pageSlice'

export default function Scifi_girl() {
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
        <p className='mt-2 text-lg leading-8 text-slate-800 mb-10 max-w-6xl'>
          Precision reigns with clean topology, ensuring smooth animations and
          efficient rendering. Seamlessly mapped UVs bring textures to life,
          enhancing realism.
        </p>
        <img
          src={scifi_girl_001}
          alt='scifi_girl_001'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={scifi_girl_002}
          alt='scifi_girl_002'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={scifi_girl_003}
          alt='scifi_girl_003'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={scifi_girl_004}
          alt='scifi_girl_004'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={scifi_girl_005}
          alt='scifi_girl_005'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={scifi_girl_006}
          alt='scifi_girl_006'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={scifi_girl_007}
          alt='scifi_girl_007'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={scifi_girl_008}
          alt='scifi_girl_008'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={scifi_girl_009}
          alt='scifi_girl_009'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={scifi_girl_010}
          alt='scifi_girl_010'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={scifi_girl_011}
          alt='scifi_girl_011'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={scifi_girl_012}
          alt='scifi_girl_012'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={scifi_girl_013}
          alt='scifi_girl_013'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={scifi_girl_014}
          alt='scifi_girl_014'
          className='rounded-xl drop-shadow-xl'
        />
      </div>
    </>
  )
}
