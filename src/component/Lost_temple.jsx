import React from 'react'
import {
  lost_temple_001,
  lost_temple_002,
  lost_temple_003,
  lost_temple_004,
  lost_temple_005,
  lost_temple_006,
  lost_temple_007,
  lost_temple_008,
  lost_temple_009,
  lost_temple_010,
  lost_temple_011,
  lost_temple_012,
  lost_temple_013,
  lost_temple_014,
  lost_temple_015,
  lost_temple_016,
  lost_temple_017,
  lost_temple_018,
  lost_temple_019,
  lost_temple_020,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'

export default function Lost_temple() {
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
          src={lost_temple_001}
          alt='lost_temple_001'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={lost_temple_002}
          alt='lost_temple_002'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={lost_temple_003}
          alt='lost_temple_003'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={lost_temple_004}
          alt='lost_temple_004'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={lost_temple_005}
          alt='lost_temple_005'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={lost_temple_006}
          alt='lost_temple_006'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={lost_temple_007}
          alt='lost_temple_007'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={lost_temple_008}
          alt='lost_temple_008'
          className='rounded-xl drop-shadow-xl'
        />
        <div className='grid grid-cols-2 gap-10'>
          <img
            src={lost_temple_009}
            alt='lost_temple_009'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={lost_temple_010}
            alt='lost_temple_010'
            className='rounded-xl drop-shadow-xl'
          />
        </div>
        <div className='grid grid-cols-2 gap-10'>
          <img
            src={lost_temple_011}
            alt='lost_temple_011'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={lost_temple_012}
            alt='lost_temple_012'
            className='rounded-xl drop-shadow-xl'
          />
        </div>
        <div className='grid grid-cols-2 gap-10'>
          <img
            src={lost_temple_013}
            alt='lost_temple_013'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={lost_temple_014}
            alt='lost_temple_014'
            className='rounded-xl drop-shadow-xl'
          />
        </div>
        <img
          src={lost_temple_015}
          alt='lost_temple_015'
          className='rounded-xl drop-shadow-xl'
        />
        <div className='grid grid-cols-2 gap-10'>
          <img
            src={lost_temple_016}
            alt='lost_temple_016'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={lost_temple_017}
            alt='lost_temple_017'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={lost_temple_018}
            alt='lost_temple_018'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={lost_temple_019}
            alt='lost_temple_019'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={lost_temple_020}
            alt='lost_temple_020'
            className='rounded-xl drop-shadow-xl'
          />
        </div>
      </div>
    </>
  )
}
