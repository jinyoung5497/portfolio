import React from 'react'
import { multi_step_001, multi_step_002 } from '../assets'

export default function Multi_step() {
  return (
    <>
      <div className='flex flex-col gap-5 mx-32 sm:mx-20 xs:mx-10 2xs:mx-5'>
        <div className='flex items-center justify-center gap-10'>
          <a href='https://multi-step-form-2p9zc7mkt-jinyoung5497.vercel.app/'>
            <img
              src={multi_step_001}
              alt='multi_step_001'
              className='cursor-pointer'
            />
          </a>
          <a href='https://multi-step-form-2p9zc7mkt-jinyoung5497.vercel.app/'>
            <img
              src={multi_step_002}
              alt='multi_step_002'
              className='cursor-pointer'
            />
          </a>
        </div>
        <div className='flex self-center gap-10 3xs:gap-5'>
          <a
            href='https://multi-step-form-2p9zc7mkt-jinyoung5497.vercel.app/'
            className='h-12 bg-gradient-to-r from-teal-500 to-cyan-500  hover:from-violet-400 hover:to-cyan-400 rounded-lg p-5 flex items-center text-white font-medium border-[1px] mt-10 w-32 justify-center self-center'
          >
            Live Link
          </a>
          <a
            href='https://github.com/jinyoung5497/multi-step-form'
            className='h-12 bg-gradient-to-r from-teal-500 to-cyan-500  hover:from-violet-400 hover:to-cyan-400 rounded-lg p-5 flex items-center text-white font-medium border-[1px] mt-10 w-32 justify-center self-center'
          >
            View code
          </a>
        </div>
        <p className='font-bold text-lg'>Users should be able to:</p>
        <ul className='leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md'>
          <li>Complete each step of the sequence</li>
          <li>Go back to a previous step to update their selections</li>
          <li>
            See a summary of their selections on the final step and confirm
            their order
          </li>
          <li>
            View the optimal layout for the interface depending on their
            device's screen size
          </li>
          <li>
            See hover and focus states for all interactive elements on the page
          </li>
          <li>Receive form validation messages if:</li>
          <p className='indent-5'>- A field has been missed</p>
          <p className='indent-5'>
            - A step is submitted, but no selection has been made
          </p>
        </ul>
        <p className='font-bold text-lg'>Built with</p>
        <ul className='leading-8 list-disc ml-5 4xs:leading-7 4xs:text-md'>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>React Router Dom</li>
        </ul>
      </div>
    </>
  )
}
