import React from 'react'
import {
  grenade_001,
  grenade_002,
  grenade_003,
  maya,
  substancepainter,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import { hover } from '../slices/pageSlice'

export default function Grenade() {
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
        </div>
        <p className='mt-2 text-lg leading-8 text-slate-800 mb-10 max-w-6xl'>
          Optimization is a fundamental process in various fields that aims to
          enhance efficiency, performance, and resource utilization. In the
          realm of computer graphics and 3D rendering, optimization plays a
          pivotal role in achieving realistic and visually appealing results.
          One crucial technique within this context is normal mapping. Normal
          mapping is of paramount importance as it allows intricate surface
          details to be convincingly portrayed without the need for complex
          geometry. By encoding surface normals into a texture map, and then
          applying them to a lower-polygon model, normal mapping simulates the
          interaction of light and shadows, resulting in heightened realism.
          This not only significantly reduces computational demands compared to
          using higher-polygon models, but it also enables dynamic and
          interactive rendering in real-time applications such as video games
          and simulations. In essence, the integration of optimization
          techniques like normal mapping exemplifies the delicate balance
          between computational efficiency and visual fidelity, revolutionizing
          the way we experience digital graphics.
        </p>
        <img
          src={grenade_001}
          alt='grenade_001'
          className='rounded-xl drop-shadow-xl'
        />
        <img
          src={grenade_002}
          alt='grenade_002'
          className='rounded-xl drop-shadow-xl'
        />
        <div className='flex flex-col items-center justify-center'>
          <p>Concept Art</p>
          <img
            src={grenade_003}
            alt='grenade_003'
            className='rounded-xl drop-shadow-xl'
          />
        </div>
      </div>
    </>
  )
}
