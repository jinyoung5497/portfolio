import React from 'react'
import {
  general_001,
  general_002,
  general_003,
  general_004,
  general_005,
  general_006,
  general_007,
  general_008,
  general_009,
  general_010,
  general_011,
  general_012,
  general_013,
  general_014,
  general_015,
  general_016,
  general_017,
} from '../assets'
import moodboard from '../assets/general/general_moodboard.png'
import { useSelector, useDispatch } from 'react-redux'

export default function General() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)

  return (
    <>
      <div className='flex flex-col gap-10 items-center justify-center 3xs:gap-5'>
        <div className='flex gap-10 my-10 max-w-6xl flex-wrap items-center justify-center 3xs:gap-5'>
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
            Z wrap
          </p>
          <p className='text-[20px] 3xs:text-md text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>
            Fibershop
          </p>
        </div>
        <p className='mt-2 text-lg leading-8 text-slate-800 mb-10 max-w-6xl'>
          I proudly present my latest creation, a meticulously designed 3D
          model, masterfully sculpted using Maya and ZBrush, and brought to life
          with vibrant textures using Substance Painter. With clean and
          strategic topology, complemented by well-structured UV layouts, the
          model stands as a testament to technical precision. Its diverse
          aesthetic draws inspiration from thoughtfully curated moodboards,
          seamlessly blending elements that evoke distinct moods and textures.
          This project exemplifies the harmonious fusion of creativity and
          technological expertise, resulting in a captivating and versatile
          artwork.
        </p>

        <div className='grid grid-cols-2 gap-10 2xs:gap-3 3xs:flex 3xs:flex-col'>
          <div className='flex flex-col items-center justify-center'>
            <img
              src={general_001}
              alt='general_001'
              className='rounded-xl drop-shadow-xl'
            />
            <p className='mt-2 text-md font-semibold'>High poly render</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img
              src={general_002}
              alt='general_002'
              className='rounded-xl drop-shadow-xl'
            />
            <p className='mt-2 text-md font-semibold'>High poly render</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img
              src={general_003}
              alt='general_003'
              className='rounded-xl drop-shadow-xl'
            />
            <p className='mt-2 text-md font-semibold'>High poly render</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img
              src={general_004}
              alt='general_004'
              className='rounded-xl drop-shadow-xl'
            />
            <p className='mt-2 text-md font-semibold'>High poly render</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img
              src={general_005}
              alt='general_005'
              className='rounded-xl drop-shadow-xl'
            />
            <p className='mt-2 text-md font-semibold'>High poly render</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img
              src={general_006}
              alt='general_006'
              className='rounded-xl drop-shadow-xl'
            />
            <p className='mt-2 text-md font-semibold'>High poly render</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img
              src={general_007}
              alt='general_007'
              className='rounded-xl drop-shadow-xl'
            />
            <p className='mt-2 text-md font-semibold'>High poly render</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img
              src={moodboard}
              alt='moodboard'
              className='rounded-xl drop-shadow-xl'
            />
            <p className='mt-2 text-md font-semibold'>Moodboard</p>
          </div>

          <img
            src={general_008}
            alt='general_008'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={general_009}
            alt='general_009'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={general_010}
            alt='general_010'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={general_011}
            alt='general_011'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={general_012}
            alt='general_012'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={general_013}
            alt='general_013'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={general_014}
            alt='general_014'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={general_015}
            alt='general_015'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={general_016}
            alt='general_016'
            className='rounded-xl drop-shadow-xl'
          />
          <img
            src={general_017}
            alt='general_017'
            className='rounded-xl drop-shadow-xl'
          />
        </div>
      </div>
    </>
  )
}
