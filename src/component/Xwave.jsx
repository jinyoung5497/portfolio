import React from 'react'
import {
  xwave_001,
  xwave_002,
  xwave_003,
  xwave_004,
  xwave_005,
  xwave_006,
  xwave_007,
  xwave_008,
  xwave_009,
  xwave_010,
  xwave_011,
  xwave_012,
  xwave_013,
  xwave_014,
  maya,
  photoshop,
  substancepainter,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import { hover } from '../slices/pageSlice'

export default function Xwave() {
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
          <img src={substancepainter} alt='substancepainter' className='h-20' />
          <img src={photoshop} alt='photoshop' className='h-20' />
        </div>
        <p className='mt-2 text-lg leading-8 text-slate-800 mb-10 max-w-6xl'>
          Collaborating closely with a concept artist, I harnessed the
          capabilities of Maya, Substance Painter, and Photoshop to meticulously
          craft a stunning 3D model. This dynamic fusion of tools allowed me to
          weave technical prowess with artistic vision, resulting in impeccable
          topology and well-organized UV layouts.
        </p>

        <img
          src={xwave_001}
          alt='xwave_001'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={xwave_002}
          alt='xwave_002'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={xwave_003}
          alt='xwave_003'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={xwave_004}
          alt='xwave_004'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={xwave_005}
          alt='xwave_005'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={xwave_006}
          alt='xwave_006'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={xwave_007}
          alt='xwave_007'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={xwave_008}
          alt='xwave_008'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={xwave_009}
          alt='xwave_009'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={xwave_010}
          alt='xwave_010'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={xwave_011}
          alt='xwave_011'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={xwave_012}
          alt='xwave_012'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={xwave_013}
          alt='xwave_013'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={xwave_014}
          alt='xwave_014'
          className='rounded-xl drop-shadow-xl'
        />
      </div>
    </>
  )
}
